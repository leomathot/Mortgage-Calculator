
import { useState } from 'react'
import Navbar from './components/Navbar'
import SliderSelect from './components/SliderSelect'
import TenureSelect from './components/TenureSelect'
import Graphic from './components/Graphic'
import Footer from './components/Footer'
import Container from '@mui/material/Container'
import { Grid, Stack } from '@mui/material'

function App() {

  const [data, setData] = useState({
    homeValue: 400000,
    downPayment: 400000 * 0.2,
    loanAmount: 400000 * 0.8,
    loanTerm: 10,
    interestRate: 5,
  })

  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ mt: 6, mb: 8}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack gap={3}>
              <SliderSelect data={data} setData={setData} />
              <TenureSelect data={data} setData={setData} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Graphic data={data} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default App
