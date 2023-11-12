import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SoftInput from 'components/SoftInput';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        border:'none',
        m: 2.5,
        marginTop:0,
        marginBottom:4,
        p: 1,
        Width: '100%',
        alignContent:'center',
        borderRadius:'6px'
      }}
    >
        <SoftInput placeholder="Enter Space Name" id="fullWidth" />
    </Box>
  );
}
