import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    backend: false,
    frontend: false,
    applications: false,
    softDevelpoment: false,
    testing: false,
    administarting: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { backend, frontend, applications, softDevelpoment, testing, administarting} = state;
  const error = [backend, frontend, applications, softDevelpoment, testing, administarting].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Field of activity</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={backend} onChange={handleChange} name="backend" />
            }
            label="Backend"
          />
          <FormControlLabel
            control={
              <Checkbox checked={frontend} onChange={handleChange} name="frontend" />
            }
            label="Frontend"
          />
          <FormControlLabel
            control={
              <Checkbox checked={applications} onChange={handleChange} name="applications" />
            }
            label="Applications"
          />
          <FormControlLabel
            control={
              <Checkbox checked={softDevelpoment} onChange={handleChange} name="soft develpoment" />
            }
            label="Soft develpoment"
          />
          <FormControlLabel
            control={
              <Checkbox checked={testing} onChange={handleChange} name="testing" />
            }
            label="Testing"
          />
          <FormControlLabel
            control={
              <Checkbox checked={administarting} onChange={handleChange} name="administarting" />
            }
            label="Administarting"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}