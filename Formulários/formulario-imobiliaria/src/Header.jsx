import logo from "./logo.png";
import style from "./style.css";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo da imobiliária" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Planos</a>
        <a href="#">Contato</a>
        <a href="#">Agende</a>
        <a href="#">Opções</a>
      </nav>
    </div>
  );
}
export default Header;
