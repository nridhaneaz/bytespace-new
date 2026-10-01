# ByteSpace

ByteSpace is a React-based course discovery interface. Visitors can browse the course catalog, explore course and creator profiles, view lesson and review pages, and open search, sign-in, and registration screens.

## Features

- Course, lesson, review, and creator profile routes
- Search page with query and category values stored in the URL
- Responsive visual layouts built from reusable React components
- Client-side navigation with route-level lazy loading
- Custom not-found page for unknown routes and slugs

## Technology

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- npm

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173` by default. If that port is occupied, Vite selects another available port and prints its URL in the terminal.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm start` | Serve the production build on `0.0.0.0` |

Run `npm run build` before using either production preview command.

## Routes

| Path | Description |
| --- | --- |
| `/` | Course discovery landing page |
| `/search?q=figma&category=UI%2FUX%20Design` | Search interface with URL-backed query and category values |
| `/course/:slug` | Course details |
| `/course/:slug/lesson` | Course lessons |
| `/course/:slug/reviews` | Course reviews |
| `/creator/:slug` | Creator profile |
| `/signin` | Sign-in screen |
| `/register` | Creator registration screen |
| Any other path | Custom not-found page |

## Project Structure

| Path | Purpose |
| --- | --- |
| `main.jsx` | React entry point and browser router setup |
| `App.jsx` | Route definitions, lazy loading, and client-side page metadata |
| `app/` | Page components grouped by route; this is not a Next.js App Router directory |
| `components/` | Shared navigation, search, course, and design components |
| `lib/` | Course and creator data and shared utilities |
| `public/images/` | Visual assets used by the page designs |
| `app/globals.css` | Tailwind imports, theme variables, and global styles |
| `vite.config.mjs` | Vite, React plugin, and `@/` import alias configuration |

## Architecture and Deployment

## ByteSpace New

The project is a client-rendered single-page application built with React and Vite. Vite is used for development and production builds, while React Router handles client-side navigation and route parameters.

The project includes reusable components, shared data, and image assets across the different pages. Each route is lazy-loaded so that route-specific code and assets are loaded when the route is accessed.

### Highlights

* React + Vite
* React Router for client-side routing
* Reusable components
* Lazy-loaded routes
* Responsive layouts
* Shared data and image assets
