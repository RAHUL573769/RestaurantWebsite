import { Route, Routes } from "react-router-dom";
import HomePage from "./Componenets/HomePage/HomePage";
import Menu1 from "./Componenets/Menu1/Menu1";

import Header from "./Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/menu1" element={<Menu1></Menu1>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
