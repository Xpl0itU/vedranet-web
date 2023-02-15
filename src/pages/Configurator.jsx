import { useState } from 'react';
import './Configurator.css';
import { Slider } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Configurator() {
  const [internetSpeedValue, setInternetSpeedValue] = useState(20);
  const [cloudComputer, setCloudComputer] = useState(true);
  const [cloudComputerBasicSetting, setCloudComputerBasicSetting] = useState("Medio");
  const [physicalComputer, setPhysicalComputer] = useState(false);
  return (
    <div>
      <div>
        <FormControl>
            <FormLabel id="internet-speed-label">Velocidad de internet</FormLabel>
              <Slider
              aria-labelledby="internet-speed-label"
              style={{width: "300%"}}
              defaultValue={20}
              valueLabelDisplay="auto"
              step={10}
              marks
              onChange={(event, newValue) => {
                setInternetSpeedValue(newValue);
                }
              }
              min={10}
              max={100}/>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel id="cloud-computer-label">Equipo en la nube</FormLabel>
          <RadioGroup
            row
            aria-labelledby="cloud-computer-label"
            name="cloud-computer-radio-buttons-group"
            value={cloudComputer}
            onChange={() => setCloudComputer(prev => !prev)}>
            <FormControlLabel value={true} control={<Radio/>} label="Sí"/>
            <FormControlLabel value={false} control={<Radio/>} label="No"/>
          </RadioGroup>
        </FormControl>
      </div>
      {
      (cloudComputer === true) ? 
      <>
        <Box sx={{ maxWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel id="cloud-computer-basic-select-label">Características</InputLabel>
            <Select
              labelId="cloud-computer-basic-select-label"
              id="cloud-computer-basic-select"
              value={cloudComputerBasicSetting}
              label="Características"
              onChange={(event) => {
                setCloudComputerBasicSetting(event.target.value);
              }}
            >
              <MenuItem value={"Básico"}>Básico</MenuItem>
              <MenuItem value={"Medio"}>Medio</MenuItem>
              <MenuItem value={"Avanzado"}>Avanzado</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </> : 
    null}
    <div>
        <FormControl>
          <FormLabel id="physical-computer-label">Equipo físico</FormLabel>
          <RadioGroup
            row
            aria-labelledby="physical-computer-label"
            name="physical-computer-radio-buttons-group"
            value={physicalComputer}
            onChange={() => setPhysicalComputer(prev => !prev)}>
            <FormControlLabel value={true} control={<Radio/>} label="Sí"/>
            <FormControlLabel value={false} control={<Radio/>} label="No"/>
          </RadioGroup>
        </FormControl>
      </div>
    <div className='snapToBottom'>
      <Divider><Typography>Resumen</Typography></Divider>
      <Typography>Velocidad de internet: {internetSpeedValue}Mbps</Typography>
      <Typography>Equipo en la nube: {cloudComputer ? "Sí" : "No"}</Typography>
      {cloudComputer ? 
      <>
        <Typography>Perfil de características: {cloudComputerBasicSetting}</Typography>
      </> :
      null}
      <Typography>Equipo físico: {physicalComputer ? "Sí" : "No"}</Typography>
      <br/>
      <Typography style={{fontWeight: "bold"}}>Precio final: x€</Typography>
    </div>
    </div>
  )
}

export default Configurator
