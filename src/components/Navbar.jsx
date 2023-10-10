import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='lg' sx={{pt: 2, pb: 2}}>
        <Typography variant='h1' component='div'>
          Mortgage Calculator
        </Typography>
      </Container>
    </AppBar>
  )
}

export default Navbar