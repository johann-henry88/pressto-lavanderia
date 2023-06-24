import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Inicio from "./pages/inicio";
import Footer from "./pages/Footer";
import Servicios from "./pages/servicios";
import NuestrosLocales from "./pages/locales";
import OfertasEnLocales from "./pages/ofertas";
import SobreNosotros from "./pages/nosotros";
import Contactos from "./pages/contactos";
import Error from "./pages/Error";


function App() {
  return (
    <div className="text-light bg-dark vh-100">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/locales" element={<NuestrosLocales />} />
        <Route path="/ofertas" element={<OfertasEnLocales />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/" element={<Error />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
