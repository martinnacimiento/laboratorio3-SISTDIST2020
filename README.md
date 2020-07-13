# Laboratorio 3 - Particionamiento

## Integrantes 👨👩
- Nacimiento, Martin
- Senghaas, Evelin

## Requisitos ✋
- Node.js

## Comenzar 🚀
Para utilizar el proyecto usted debe:
- Clonar el repositorio.
- Una vez clonado el proyecto ejecuta en tu consola `npm i` para instalar las dependencias.
- Para ejecutar el proyecto `npm run dev`.
- Para probar la API, puede utilizar cliente HTTP como Postman o Insomnia.

## Endpoints 🗺️
En el archivo `index.js` se encuentran los endpoints o rutas de entrada del almacenamiento clave-valor.

| Ruta | Método HTTP | Llamada al método | Retorna      |
| ---- | ----------- | ----------------- | ------------ |
| /    | GET         | get(key)          | valor, error |
| /    | POST        | save(key, value)  | 0, 1, error  |
| /    | DELETE      | delete(key)       | valor, error |

- **0**: Si la clave no existía (Se creo una nueva clave-valor).
- **1**: Si la clave existía (Se actualizo el valor de la clave).
- **valor**: el valor asociado a la clave en el almacenamiento.
- **error**: puede darse por
  - mal formato de la clave
  - la clave no existe

## Store 🏪
El servicio de almacenamiento clave-valor se encuentra en el archivo `services/Store.js`. La clase Store implementa los métodos `get, save, delete` anteriormente mencionados.