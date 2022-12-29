import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineChrome,
  AiOutlineWhatsApp,
} from "react-icons/ai";
function Infos() {
  return (
    <div className="socialMedia">
      <AiOutlineInstagram color="ea2849" size={33} className="socialMedia" />
      <AiOutlineMail color="ea2849" size={33} className="socialMedia" />
      <AiOutlineChrome color="ea2849" size={33} className="socialMedia" />
      <AiOutlineWhatsApp color="ea2849" size={33} className="socialMedia" />
    </div>
  );
}
export default Infos;
