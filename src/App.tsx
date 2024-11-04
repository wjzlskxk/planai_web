import React from "react";
import "./App.css";
import Login from "./components/auth/login";
import QueryClientProvider from "./components/common/provider/query-provier";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        <Login />
      </QueryClientProvider>
    </div>
  );
}

export default App;
