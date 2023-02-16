import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactBottomGrid from "../components/ContactBottomGrid";
import Divider from "@mui/material/Divider";
import "./Prices.css";

function Prices() {
  return (
    <>
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
              <Typography variant="body2" gutterBottom>
                <ul>
                  <li>100Mbps de velocidad</li>
                </ul>
              </Typography>
            </CardContent>
            <Typography align="center" sx={{ fontWeight: "bold" }}>
              19,99€
            </Typography>
            <CardActions>
              <Button size="small" href="/configurator">
                Configurar
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
                  <li>100Mbps de velocidad</li>
                  <li>Equipo en la Nube estándar</li>
                  <ul>
                    <li>50GB de almacenamiento</li>
                    <li>4GB de RAM</li>
                  </ul>
                </ul>
              </Typography>
            </CardContent>
            <Typography align="center" sx={{ fontWeight: "bold" }}>
              39,99€
            </Typography>
            <CardActions>
              <Button size="small" href="/configurator">
                Configurar
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
                  <li>100Mbps de velocidad</li>
                  <li>Equipo en la Nube estándar</li>
                  <ul>
                    <li>50GB de almacenamiento</li>
                    <li>4GB de RAM</li>
                  </ul>
                  <li>Equipo físico a elección en tienda</li>
                </ul>
              </Typography>
            </CardContent>
            <Typography align="center" sx={{ fontWeight: "bold" }}>
              79,99€
            </Typography>
            <CardActions>
              <Button size="small" href="/configurator">
                Configurar
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <Divider />
      <ContactBottomGrid />
    </>
  );
}

export default Prices;
