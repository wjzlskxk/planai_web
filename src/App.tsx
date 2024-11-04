import React from "react";
import QueryClientProvider from "./components/common/provider/query-provier";
import Router from "./components/router";
import Header from "./components/common/header";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        {/* <Router /> */}
        <Header />
      </QueryClientProvider>
    </div>
  );
}

export default App;
