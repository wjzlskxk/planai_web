import React from "react";
import QueryClientProvider from "./components/common/provider/query-provier";
import Router from "./components/router";
import Header from "./components/common/header";
import Sidebar from "./components/common/sidebar";
import BottomBar from "./components/common/bottombar";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        {/* <Router /> */}
        <BottomBar />

      </QueryClientProvider>
    </div>
  );
}

export default App;
