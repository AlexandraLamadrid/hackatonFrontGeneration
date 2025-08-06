# 🎾 Tienda de Ropa de Tenis - Landing Page Interactiva

Bienvenido/a a tu primer hackathon: esta landing page muestra los productos principales de una tienda especializada en **ropa deportiva de tenis**, permitiendo al usuario interactuar con un carrito de compras que persiste usando LocalStorage.

---

## 🚀 Misión del Proyecto

Crear una landing page interactiva para una tienda de ropa de tenis que:

✅ Tenga un diseño atractivo y coherente con una paleta de colores definida.  
✅ Ofrezca una interfaz intuitiva que permita a los usuarios agregar productos al carrito.  
✅ Aplique animaciones al agregar productos para enfatizar las interacciones.  
✅ Guarde los productos seleccionados en LocalStorage para persistencia de datos.

---

## 🎨 Paleta de colores

La landing utiliza los siguientes colores definidos en el archivo `styles.css`:
```css
:root {
  --rojo-principal: #D62828;
  --rojo-suave: rgba(214, 40, 40, 0.8);
  --negro-suave: #111111;
  --gris-oscuro: #333333;
  --gris-claro: #E0E0E0;
  --borde: #CCCCCC;
  --blanco: #FFFFFF;
}
```

---

## 📂 Estructura del Proyecto

```
.
├── index.html        # Página principal de la tienda
├── styles.css        # Estilos con la paleta de colores
├── script.js         # Lógica de productos, carrito y LocalStorage
└── README.md         # Este archivo de documentación
```

---

## 🔎 Descripción de los archivos

### `index.html`
- Contiene la estructura principal de la landing page.
- Incluye un encabezado con el título de la tienda y un eslogan.
- Muestra un `<main>` donde se cargan dinámicamente los productos.
- Integra un panel lateral fijo que actúa como carrito de compras.

### `styles.css`
- Define estilos globales con una paleta de colores personalizable usando variables CSS.
- Da formato a los elementos visuales: productos, botones, navegación, carrito y layout general.
- Añade transiciones y animaciones suaves al interactuar con los productos.

### `script.js`
- Contiene el arreglo de productos de ropa deportiva de tenis.
- Genera dinámicamente el contenido del catálogo en la página.
- Implementa funciones para agregar productos al carrito y mostrar confirmación visual.
- Utiliza `LocalStorage` para guardar el estado del carrito incluso después de recargar la página.
- Permite vaciar el carrito y sincronizarlo con el almacenamiento.

---

## 🛒 Carrito de compras

- El carrito se muestra como un **panel lateral fijo** en la parte derecha de la pantalla.
- Cada producto agregado aparece como un ítem con nombre y precio.
- Los productos se **guardan automáticamente en LocalStorage**, lo que permite que el contenido del carrito **persista tras cerrar o recargar la página**.
- El botón **"Vaciar carrito"** elimina todos los productos tanto del DOM como del almacenamiento.

---

## ⚙️ Tecnologías utilizadas

✅ **HTML5** – para la estructura semántica de la landing.  
✅ **CSS3** – con variables personalizadas para una paleta de colores coherente y moderna.  
✅ **JavaScript puro (Vanilla JS)** – para la lógica de interacción sin frameworks externos.  
✅ **LocalStorage** – para guardar el estado del carrito de forma persistente en el navegador.

---
