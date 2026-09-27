# Apple UI – Recreated | Apple-04

A React.js and React Native recreation of the Apple-04 Figma design.

## Project Structure

- `web/` — React.js + Vite web implementation
- `mobile/` — React Native + Expo mobile implementation
- `web/public/assets/` — exported Figma image assets used by the web page
- `mobile/assets/` — image assets prepared for the React Native implementation

## Web

Install dependencies:

```bash
cd web
npm install

Start the development server:

npm run dev

Production build:

npm run build
npm run preview
Live Demo

https://apple-04.vercel.app/

Mobile

The mobile implementation uses React Native with Expo SDK 57.

Install dependencies:

cd mobile
npm install

Start the Expo development server:

npx expo start

Then open the project using Expo Go, an Android emulator, or an iOS simulator.

Implementation Notes
The web page is built using reusable React components and CSS rather than using the Figma screenshots as the page itself.
The main product hero artwork and section artwork use exported image assets from the design.
The web version is responsive and includes small hover and transition effects on interactive elements and cards where appropriate.
The mobile version uses the same exported image assets and provides a custom mobile layout based on the Apple-04 design, since the supplied Figma did not contain a mobile application UI.
The mobile footer uses expandable sections for smaller screens.
The web implementation focuses on matching the supplied Figma design in layout, typography, spacing, colors, imagery, and content.
Submission
Web Deployment

https://apple-04.vercel.app/

Source Code

The repository contains both the React.js web implementation and the React Native mobile implementation.

The project source does not include node_modules or generated build output. Run npm install inside the respective project folder to restore dependencies.