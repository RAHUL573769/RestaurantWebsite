import { Route, Routes } from "react-router-dom";
import HomePage from "./Componenets/HomePage/HomePage";
import Menu1 from "./Componenets/Menu1/Menu1";
import Menu2 from "./Componenets/Menu2/Menu2";
import Menu3 from "./Componenets/Menu3/Menu3";
import Menu4 from "./Componenets/Menu4/Menu4";
import Footer from "./Shared/Footer";

import Header from "./Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/menu1" element={<Menu1></Menu1>}></Route>
        <Route path="/menu2" element={<Menu2></Menu2>}></Route>
        <Route path="/menu3" element={<Menu3></Menu3>}></Route>
        <Route path="/menu4" element={<Menu4></Menu4>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
