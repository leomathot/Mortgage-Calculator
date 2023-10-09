import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
      <Toolbar>
        <Typography variant="h1" component="div">
          Mortgage Calculator 02
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar