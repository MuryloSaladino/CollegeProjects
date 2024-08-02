import { Container, Grid } from "@mui/material"
import ToggleVisible from "./components/ToggleVisible"
import Clock from "./components/Clock"
import RandomColorBox from "./components/RandomColorBox"
import CounterBox from "./components/CounterBox"
import GoodMorningBox from "./components/GoodMorningBox"

function App() {

    return (
        <Container maxWidth="xl" sx={{ marginTop: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <ToggleVisible/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Clock/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <RandomColorBox/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <CounterBox/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <GoodMorningBox/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App
