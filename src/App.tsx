import React from "react";
import Home from "./components/home";
import QueryClientProvider from "./components/common/provider/query-provier";
import BottomBar from "./components/common/bottombar";
function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
