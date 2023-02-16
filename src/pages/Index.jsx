import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "./Prices.css";

function Index() {
    return(
        <>
            <div>
                <Typography variant="h3">
                    VedraNet
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Los mejores precios de toda Pontevedra
                </Typography>
            </div>
            <Divider/>
            <div>
                <Typography variant="h4" align="center" gutterBottom>
                    Tarifas
                </Typography>
                <div style={{display: "flex", justifyContent: "center"}}>
                <div className="card">
                    <Card sx={{ maxWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Internet
                        </Typography>
                        <Typography variant="body2">
                            <ul>
                                <li>100Mbps de velocidad</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="/prices">Ver Detalles</Button>
                    </CardActions>
                    </Card>
                </div>
                <div className='card'>
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
                    <CardActions>
                        <Button size="small" href="/prices">Ver Detalles</Button>
                    </CardActions>
                    </Card>
                </div>
                <div className='card'>
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
                    <CardActions>
                        <Button size="small" href="/prices">Ver Detalles</Button>
                    </CardActions>
                    </Card>
                </div>
            </div>
            </div>
        </>
    );
}

export default Index;