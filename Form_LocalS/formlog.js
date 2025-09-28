
  window.onload = function() {
      let datosGuardados = localStorage.getItem("usuario");
      if (datosGuardados) {
        let datos = JSON.parse(datosGuardados);
        document.getElementById("mensaje").textContent =
          "Hola " + datos.nombre + ", tienes " + datos.edad +
          " años, tu día de la semana favorito es " + datos.diaFavorito;
      }
  };
  document.getElementById("formularioL").onsubmit = function(e) {
      e.preventDefault(); 
      let nombre = document.getElementById("nombre").value;
      let edad = document.getElementById("edad").value;
      let dia = document.getElementById("dia").value;

      let datos = {
        nombre: nombre,
        edad: edad,
        diaFavorito: dia
      };
      localStorage.setItem("usuario", JSON.stringify(datos));
      alert("Datos guardados, recarga la página para ver el mensaje.");
  };      