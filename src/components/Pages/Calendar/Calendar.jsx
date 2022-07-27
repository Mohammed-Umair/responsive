import React from 'react'
import { Box, Grid,Paper,Typography } from '@mui/material'

export const Calendar = () => {
  return (
    <Box  height="70vh" display="flex"
    justifyContent="center" >
      <Box component={Paper} width="600px" height="100px" mt={5}>
    <Typography textAlign="center"  variant='h6'>Calendar</Typography>  
      </Box>
    </Box>
  )
}
