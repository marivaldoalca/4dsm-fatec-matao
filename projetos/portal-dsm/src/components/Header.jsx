import logo from "../assets/MARIVALDO_PEQUENO.jpg";
function Header() {
 return (
 <header>
    <img src={logo} alt="Logo Portal DSM" />
    <aside>
        <h1>Portal DSM</h1>
        <p>Desenvolvimento de Sistemas</p>
    </aside>
    
 </header>
 );
}
export default Header;