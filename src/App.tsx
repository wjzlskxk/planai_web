import React from "react";

import "./App.css";
import Login from "./components/auth/login";
import Home from "./components/home";

import QueryClientProvider from "./components/common/provider/query-provier";
import Router from "./components/router";
import Header from "./components/common/header";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>

        <Home />

      </QueryClientProvider>
    </div>
  );
}

export default App;
