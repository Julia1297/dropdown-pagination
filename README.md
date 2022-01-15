# Dropdown-pagination

Este proyecto despliega un dropdown que permite paginar los datos a medida que se scrolleando hacia abajo. Debido a problemas con la API solicitada, se usan datos estáticos en el archivo `data`  y en `load-options` se simula la funcionalidad de la paginación y la búsqueda. De igual manera se deja el archivo `customer.service` el cual estaba pensado para realizar las llamadas a la API.
Se usan componentes ya creados como `AsyncPaginate` que acepta las distintas propiedades de un select pero permite manipular los datos de forma asíncrona con la función loadOptions que permite paginarlos en base al número de elementos, número de página, entre otros.

### `npm install`
Para instalar las dependencias.

### `npm start`
Para levantar el servidor que correrá en: [http://localhost:3000](http://localhost:3000).


