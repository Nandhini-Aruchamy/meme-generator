# Meme Generator (React + Vite)

A small React app built with Vite that lets you generate memes by selecting images and adding custom text.

Live demo: https://meme-generator-react1.netlify.app/

## Features

- Pick from a list of meme images
- Add top and bottom text and position them on the image
- Download the generated meme image
- Built with React + TypeScript and Vite for fast development

## Quick Start

Prerequisites:

- Node.js (16+ recommended)

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open http://localhost:5173 in your browser.

Build for production:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

## Deployment

This project is deployed on Netlify:

https://meme-generator-react1.netlify.app/

If you redeploy, you can connect your GitHub repo to Netlify or upload the contents of the `dist` folder after running `npm run build`.

## Project Structure

- `index.html` - App entry HTML
- `src/` - React source files
	- `main.tsx` - App bootstrap
	- `App.tsx` - Main app component
	- `components/` - Reusable components (Header, Meme, etc.)

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — locally preview the production build

## Tech Stack

- React 18
- TypeScript
- Vite
