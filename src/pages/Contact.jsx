import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Prices.css";

function Contact() {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Contacto
      </Typography>
      <div className="card flex-container">
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography variant="body2">
              Contamos con varias opciones de contacto
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>E-mail</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="flex-container">
        <div className="card">
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Facebook
              </Typography>
              <Typography variant="body2">/vedranet</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Twitter
              </Typography>
              <Typography variant="body2">@vedranet</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Instagram
              </Typography>
              <Typography variant="body2">@vedranet</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                E-mail
              </Typography>
              <Typography variant="body2">contacto@vedranet.com</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Contact;
