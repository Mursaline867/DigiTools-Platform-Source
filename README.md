# DigiTools Platform

A polished, responsive digital tools marketplace recreated from the supplied Figma/Penpot design. Users can explore premium digital products, add or remove products from a cart, view a live cart total, and complete a simulated checkout with toast notifications.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON product data
- Vite

## Core Features

1. **Design-faithful responsive interface** — hero, statistics, products, 3-step workflow, pricing, CTA, and footer follow the supplied design system and assets.
2. **Interactive product/cart toggle** — add products, view navbar count, remove individual items, calculate total, and clear the cart at checkout.
3. **User feedback via React-Toastify** — polished notifications for adding, removing, selecting plans, and checkout actions.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Suggested Git Commit Sequence

1. `chore: initialize React and Vite project`
2. `style: configure Tailwind CSS and DaisyUI theme`
3. `feat: build responsive navbar and hero section`
4. `feat: add statistics and digital products data`
5. `feat: implement product cards and cart state`
6. `feat: add cart remove and checkout functionality`
7. `feat: build steps pricing CTA and footer sections`
8. `fix: refine responsiveness accessibility and final UI`
