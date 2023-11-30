import React from "react";
import PublicRoutes from "./routes/PublicRoutes";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div>
   <AuthProvider>
      <PublicRoutes> 
      </PublicRoutes>
    </AuthProvider>
    </div>
  );
}

export default App;
    