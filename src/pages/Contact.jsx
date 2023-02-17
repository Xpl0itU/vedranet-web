import { Description } from "@mui/icons-material";
import "./Contact.css"
function Contact() {
  return (
    <>
      <p id="p1">Contacto</p>
      <div id="Description"><p>Tenemos varias posibilidades de contacto</p>
      <ul id="list1">
        <li><a href="">Facebook</a></li>
        <li><a href="">Twitter</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">E-mail</a></li> 
      </ul>    
      </div>
      <img id="img1" src="facebook.png"></img>
      <img id="img2" src="twitter.png"></img>
      <img id="img3" src="instagram.jpg"></img>
      <img id="img4" src="gmail.jpeg"></img>
    </>
  );
}

export default Contact;
