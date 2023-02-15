import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png"

const pages = new Map([
    ["Inicio", "/"],
    ["Sobre Nosotros", "/about"],
    ["Configurador", "/configurator"],
    ["Precios", "/prices"],
    ["Contacto", "/contact"]
]);

function TopBar() {
    const goToPage = (e) => {
        window.location.href = pages.get(e.target.textContent);
    };
    return (
        <AppBar position="static" sx={{mb: "2%"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <img style={{height: "16%", width: "9%"}} src={logo}/>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {Array.from(pages.keys()).map((page) => (
                    <Button
                        key={page}
                        onClick={goToPage}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default TopBar;