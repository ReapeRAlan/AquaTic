# AquaTic Frontend

This is the frontend portion of the AquaTic project. It's a single-page application built using [React](https://reactjs.org/) and bundled with [Vite](https://vitejs.dev/). It interacts directly with the `AquaTic_backend` canister hosted on the Internet Computer.

## Getting Started

1.  **Install dependencies:** Make sure you've run `npm install` in the project root.
2.  **Start the development server:** Run `npm start` from this directory, or the root, to start Vite on `http://localhost:3000`. This will automatically proxy requests to the local Internet Computer replica (if running on port 4943).

## Scripts

*   `npm run start`: Starts the local development server using Vite.
*   `npm run build`: Compiles TypeScript and builds the production-ready assets into a `dist/` directory.
*   `npm run format`: Formats code using Prettier.

## Technologies

*   **React:** Used for building the user interface.
*   **Vite:** A fast build tool and development server.
*   **TypeScript:** Adds static typing to JavaScript for better developer experience and reliability.
*   **@dfinity/agent:** Library for communicating with the Internet Computer.
