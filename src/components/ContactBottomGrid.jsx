import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "inline",
    alignItems: "center",
    justifyContent: "center"
}));

function ContactBottomGrid() {
    return(
        <>
            <Typography variant="h5" align="center" gutterBottom>
                Contacta con nosotros
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent: "center"}}>
                <Grid item>
                    <Item>Facebook: /vedranet</Item>
                </Grid>
                <Grid item>
                    <Item>Twitter: @vedranet</Item>
                </Grid>
                <Grid item>
                    <Item>Instagram: @vedranet</Item>
                </Grid>
                <Grid item>
                    <Item>E-mail: contacto@vedranet.com</Item>
                </Grid>
            </Grid>
        </>
    );
}

export default ContactBottomGrid;