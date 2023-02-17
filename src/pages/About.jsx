import Typography from "@mui/material/Typography";
import OIP from "../assets/OIP.jfif";
import friki from "../assets/friki.png";

function About() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" align="center" gutterBottom>
          ¿Cómo nació nuestra idea?
        </Typography>
        <Typography>
          Somos un grupo de jovenes empresearios, ¿Por qué hacemos lo que
          hacemos? Nuestra principal idea al formar VedraNet, fue el poder
          ayudar a personas "marginadas" por la zona en la que viven, ¿Nuestra
          misión? Poder ofrecerle a esta gente, la oportunidad de poder
          desarrollarse tanto de forma personal como de forma profesional
          poniendo en sus manos todo el material que sea necesario.
        </Typography>
        <img src={friki} style={{ marginTop: "1%" }} />
        <div style={{ marginTop: "3%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            ¿Quienes somos nosotros?
          </Typography>
          <Typography>
            Te estarás preguntando, ¿por qué estas personas tienen tanto interés
            en ayudarme con este servicio?, ¿para hacerse ricos?, ¿para sentirse
            mejor con ellos mismos? El éxito masivo no es nuestro único
            objetivo, somos un grupo de jovenes empresarios que en nuestro
            tiempo de formación, devido a los problemas diversos por nuestra
            localización, decidimos que nadie más tenía que pasar por
            dificultades para poder formarse o simplemente para socializar, por
            ese motivo creamos vedranet para poder ofrecerte una calidad, que
            nosotros no pudimos disfrutar y de esta manera poder formar parte de
            tu progreso.
          </Typography>
          <img src={OIP} />
          <Typography variant="caption" display="block">
            Cada día más personas confían en nosotros ¡da el paso y empieza a
            disfrutar!
          </Typography>
        </div>
      </div>
    </>
  );
}

export default About;
