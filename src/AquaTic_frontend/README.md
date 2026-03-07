# AquaTic Frontend

This is the frontend portion of the AquaTic project. It's a single-page application built using [React](https://reactjs.org/) and bundled with [Vite](https://vitejs.dev/). It interacts directly with the `AquaTic_backend` canister hosted on the Internet Computer.

## Getting Started

1.  **Initial setup (first time only):** From the project root, run `npm run setup` to install dependencies, create the `AquaTic_backend` canister, generate interfaces, and deploy it locally.
2.  **Subsequent installs:** After the initial setup, you can use `npm install` in the project root to update or add dependencies.
3.  **Start the development server:** Run `npm start` from this directory, or the root, to start Vite on `http://localhost:3000`. This will automatically proxy requests to the local Internet Computer replica (if running on port 4943).

## Scripts

*   `npm run setup`: One-time project setup; installs dependencies and creates/generates/deploys the `AquaTic_backend` canister for local development.
*   `npm run start`: Starts the local development server using Vite.
*   `npm run build`: Runs the `prebuild` step (`dfx generate`) and then compiles TypeScript to build the production-ready assets into a `dist/` directory. This requires the `dfx` CLI to be installed and a canister to be set up so that code generation can succeed.
*   `npm run format`: Formats code using Prettier.

## Technologies

*   **React:** Used for building the user interface.
*   **Vite:** A fast build tool and development server.
*   **TypeScript:** Adds static typing to JavaScript for better developer experience and reliability.
*   **@dfinity/agent:** Library for communicating with the Internet Computer.
