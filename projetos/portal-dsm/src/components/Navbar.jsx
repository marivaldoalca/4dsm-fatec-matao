import { Link } from "react-router";
function Navbar() {
 return (
 <nav>
 <Link to="/">Início</Link>
 <Link to="/alunos">Alunos</Link>
 <Link to="/cursos">Cursos</Link>
 <Link to="/cadastro">Cadastrar Aluno</Link>
 <Link to="/sobre">Sobre</Link>
 </nav>
 );
}
export default Navbar;