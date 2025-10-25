async function obtenArtista() {
  const tokenInput = document.getElementById("token");
  const token = (tokenInput?.value || "").trim();

  const artistNameInput = document.getElementById("artist-name");
  const artistName = (artistNameInput?.value || "").trim();

  const container = document.getElementById("artist-info");
  container.innerHTML = `
    <div class="alert alert-info">Consultando artista...</div>
  `;

  if (!token) {
    container.innerHTML = `
      <div class="alert alert-warning">Access token inválido.</div>
    `;
    return;
  }

  if (!artistName) {
    container.innerHTML = `
      <div class="alert alert-warning">Ingresa el nombre de un artista.</div>
    `;
    return;
  }

  try {
    const ARTIST_URL = `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`;
    const resp = await fetch(ARTIST_URL, {
      method: "GET",
      headers: { Authorization: "Bearer " },
    });

    if (!resp.ok) {
      const txt = await resp.text();
      container.innerHTML = `
        <div class="alert alert-danger">
          Error ${resp.status}: ${txt || "No se pudo obtener el artista."}
        </div>
      `;
      return;
    }

    const data = await resp.json();
    if (data.artists.items.length === 0) {
      container.innerHTML = `
        <div class="alert alert-warning">No se encontró el artista.</div>
      `;
      return;
    }

    container.innerHTML = renderArtistCard(data.artists.items[0]);
  } catch (err) {
    container.innerHTML = `
      <div class="alert alert-danger">
        Falló la petición: ${err.message}
      </div>
    `;
    console.error(err);
  }
}

function renderArtistCard(data) {
  const fallbackImg = "https://via.placeholder.com/640x640.png?text=Sin+imagen";

  const img =
    Array.isArray(data.images) && data.images.length > 0
      ? data.images[0].url
      : fallbackImg;

  const genres = Array.isArray(data.genres) ? data.genres.join(", ") : "—";
  const followers = data.followers?.total?.toLocaleString?.("es-MX") ?? "—";
  const url = data.external_urls?.spotify ?? "#";

  return `
    <div class="card mb-4" style="max-width: 22rem; border-radius: 15px; background-color: #f8f9fa;">
      <img src="${img}" class="card-img-top" alt="${data.name}" style="border-top-left-radius: 15px; border-top-right-radius: 15px;" />
      <div class="card-body">
        <h5 class="card-title" style="color: #333;">${data.name}</h5>
        <p class="card-text mb-2" style="color: #555;"><strong>Followers:</strong> ${followers}</p>
        <p class="card-text" style="color: #555;"><strong>Géneros:</strong> ${genres}</p>
        <a href="${url}" target="_blank" class="btn btn-dark" style="border-radius: 20px;">Ver en Spotify</a>
      </div>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("fetch-btn");
  if (btn) btn.addEventListener("click", obtenArtista);
});