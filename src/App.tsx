import React from "react";
import QueryClientProvider from "./components/common/provider/query-provier";
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
