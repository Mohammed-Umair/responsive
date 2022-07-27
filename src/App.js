import { DemoSlide } from "./components/SlideMenu/DemoSlide";

import { BrowserRouter } from "react-router-dom";
import { ComponentsPage } from "./components/Pages/Component/ComponentsPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <DemoSlide />
      </BrowserRouter>
    {/* <ComponentsPage/> */}
    </>
  );
}

export default App;
