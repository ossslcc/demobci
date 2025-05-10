# Ejemplo Simple de Angular

## Presentación

Hola, soy Oscar Núñez. Este proyecto es un ejemplo simple de una aplicación Angular que demuestra cómo obtener una lista de valores desde un endpoint, almacenarla en el local storage y proporcionar funcionalidades para editar, agregar o eliminar datos. Además, es importante mencionar que los datos se reinician cuando se refresca la página.

## Descripción del Proyecto

Esta aplicación Angular está diseñada para interactuar con una API que proporciona una lista de "hamburguesas". A continuación se describen las funcionalidades principales:

1. **Obtener Datos**: La aplicación realiza una solicitud HTTP a un endpoint para obtener una lista de hamburguesas (https://oscardemobci.free.beeceptor.com/hamburgers).
  
2. **Almacenamiento Local**: Una vez que se obtienen los datos, estos se almacenan en el local storage del navegador, lo que permite que los datos sean accesibles incluso después de recargar la página.

3. **Interacción con el Usuario**:
   - **Editar**: Los usuarios pueden seleccionar una hamburguesa de la lista y editar sus detalles.
   - **Agregar**: Los usuarios pueden añadir nuevas hamburguesas a la lista.
   - **Eliminar**: Los usuarios pueden eliminar hamburguesas existentes de la lista.

4. **Reinicio de Datos**: Al refrescar la página, la aplicación reinicia los datos almacenados en el local storage, lo que significa que la lista de hamburguesas se restablece a su estado inicial obtenido desde el endpoint.

## Tecnologías Utilizadas

- Angular
- Angular Material
- TypeScript
- HTML/CSS
- Local Storage

## Cómo ver el Proyecto

### Opción local: Clona este repositorio

    ```bash
    git clone <URL_DEL_REPOSITORIO>

    npm install

    ng serve

Abre tu navegador y visita `http://localhost:4200`

### Opción online: 

Abre tu navegador y visita `https://ossslcc.github.io/`

## Conclusión
Este proyecto es una demostración básica de cómo Angular puede utilizarse para construir aplicaciones interactivas que manejan datos de forma dinámica. Espero que encuentres útil este ejemplo y te inspire a crear tus propias aplicaciones en Angular.¡Gracias por tu interés