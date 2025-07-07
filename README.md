# Full-Stack Monorepo

This is a full-stack monorepo with a Next.js frontend and a Node.js/Express backend.

## Setup

1. **Install dependencies for both frontend and backend:**
   ```bash
   npm install --prefix backend
   npm install --prefix frontend
   ```

2. **Create `.env` files:**
   - In the `backend` directory, create a `.env` file and add `PORT=3001`.
   - In the `frontend` directory, create a `.env.local` file and add `NEXT_PUBLIC_API_URL=http://localhost:3001`.

## Running the applications

- **Backend:**
  ```bash
  npm run dev --prefix backend
  ```

- **Frontend:**
  ```bash
  npm run dev --prefix frontend
  ```

## Deployment

### Backend

1. Build the backend:
   ```bash
   npm run build --prefix backend
   ```
2. Start the backend:
   ```bash
   npm run start --prefix backend
   ```

### Frontend

1. Build the frontend:
   ```bash
   npm run build --prefix frontend
   ```
2. Start the frontend:
   ```bash
   npm run start --prefix frontend
   ```
