import { Routes, Route } from "react-router";
import CadastroAluno from "./pages/CadastroAluno";


import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";
function App() {
 return (
 <>
 <Header />
 <Navbar />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/alunos" element={<Alunos />} />
 <Route path="/cursos" element={<Cursos />} />
 <Route path="/sobre" element={<Sobre />} />
 <Route path="/cadastro" element={<CadastroAluno />} />
 </Routes>
 <Footer />
 </>
 );
}
export default App;