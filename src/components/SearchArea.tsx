import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Money(): JSX.Element {
  const [currency, setCurrency] = React.useState<string>('RUB');
  
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value='us'>USD</MenuItem>
          <MenuItem value='rub'>RUB</MenuItem>
          <MenuItem value='grn'>GRN</MenuItem>
          <MenuItem value='eur'>EUR</MenuItem>
        </Select>
  );
}