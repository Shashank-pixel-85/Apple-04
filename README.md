# Apple UI – Recreated | Apple-04

A React + React Native recreation of the Apple-04 Figma page.

## Project structure

- `web/` — React + Vite web implementation
- `mobile/` — React Native / Expo mobile implementation
- `web/public/assets/` — exported Figma image assets used by the web page
- `mobile/assets/` — the same image assets prepared for React Native

## Web

```bash
cd web
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Mobile

Requires Node.js and Expo tooling.

```bash
cd mobile
npm install
npx expo start
```

Then open the project with Expo Go, an Android emulator, or an iOS simulator.

## Implementation notes

- The web page is built with React components and CSS rather than using the Figma screenshots as the page itself.
- The main product hero artwork and section artwork use exported image assets from the design.
- The web version is responsive and includes small hover/transition effects only on interactive elements and cards where they are useful.
- The mobile version uses the same exported image assets and provides a custom mobile layout based on the Apple-04 content, since the supplied Figma did not contain a mobile application UI.
- The mobile footer uses expandable sections for smaller screens.

## Submission

For review, share the deployed web URL together with this project folder. The source ZIP should not include `node_modules` or generated build output; reviewers can restore dependencies with `npm install`.
