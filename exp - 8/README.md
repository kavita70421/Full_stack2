# JWT Authentication UI

A React frontend demonstrating session-based authentication and protected routes.

## Structure
- `src/components/Login.js`: Handles login and stores the JWT in session storage.
- `src/components/Dashboard.js`: A protected view requiring a valid token.
- `src/components/ProtectedRoute.js`: Handles authorization checks and redirects.
- `src/api.js`: Axios setup that automatically attaches the JWT to requests.
