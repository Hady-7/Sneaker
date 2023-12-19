import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
