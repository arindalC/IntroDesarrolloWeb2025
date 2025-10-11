# SessionStorage

- API de almacenamiento web en HTML
- Guarda los datos solo mientras la pestaña esté abierta, se borrará al cerrarla.
- Clave - Valor
- Solo guarda cadenas de texto. Para ello hay que usar JSON.stringify()
- Aislamiento de información por dominio
- Los datos tienen fecha de caducidad, pues, se eliminan automáticamente al cerrar la ventana
- La información no se envía automáticamente al servidor, solo vive en el navegador.
- Se guanda información en texto plano
- No es seguro para datos sensibles
- Suele usarse en:
    - Guardar datos de formularios
    - Mantener el estado de la interfaz
- No se sincroniza entre dispositivos

---
# Estructura

```
//Almacena la información en sessionStorage
 sessionStorage.setItem("clave", "valor");

 //Obtiene la información alamcenada desde sessionStorage
  let data = sessionStorage.getItem("clave");
```
---
# SessionStorage - métodos
- `sessionStorage.setItem("clave", "valor")`: guarda `clave` y el `valor` que se pasaron como parámetro.
- `sessionStorage.getItem("clave")`: devuelve el string guardado o `null` si no existe.
- `sessionStorage.removeItem("clave")`: elimina la entrada por `clave`.
- `sessionStorage.clear()`: elimina todas las entradas del almacenamiento.

---
# Diferencias entre localStorage y sessionStorage

| Aspecto | `sessionStorage` | `localStorage` |
|---|---|---|
| **Alcance** | Aislado por pestaña y origen | Compartido por todas las pestañas del mismo origen |
| **Duración** | Hasta cerrar la pestaña | Persistente, sin fecha de caducidad |
| **Caso de uso** | Estado temporal de sesión (wizards, filtros, flags de onboarding) | Preferencias, cachés ligeros, flags que deban sobrevivir reinicios |
| **Evento `storage`** | No sincroniza entre pestañas (cada una tiene su almacén) | Sí sincroniza entre pestañas del mismo origen |