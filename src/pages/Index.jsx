import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ContactBottomGrid from "../components/ContactBottomGrid";
import "./Prices.css";

function Index() {
  return (
    <>
      <Typography
        variant="h3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        VedraNet
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ display: "flex", justifyContent: "center" }}
      >
        Los mejores precios de toda Pontevedra
      </Typography>
      <Divider />
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Tarifas
        </Typography>
        <div className="flex-container">
          <div className="card">
            <Card sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Internet
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Internet de hasta 100Mbps estables</li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/prices">
                  Ver Detalles
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card">
            <Card sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Internet + Equipo en la Nube
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Internet de hasta 100Mbps estables</li>
                    <li>Potente equipo en la nube</li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/prices">
                  Ver Detalles
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card">
            <Card sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Internet + Equipo en la Nube + Equipo físico
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Internet de hasta 100Mbps estables</li>
                    <li>Potente equipo en la nube</li>
                    <li>Equipo físico</li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/prices">
                  Ver Detalles
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <ContactBottomGrid />
    </>
  );
}

export default Index;
