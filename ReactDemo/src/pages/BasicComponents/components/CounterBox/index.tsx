import { Box, Button } from "@mui/material"
import { useState } from "react"

const CounterBox = () => {

    const [count, setCount] = useState(0)

    return(
        <Box 
            sx={{ 
                position: "relative",
                height: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Button
                sx={{ width: "100%", height: "100%", fontSize: "3rem", color: "black" }}
                onClick={() => setCount(prev => prev+1)}
            >{ count }</Button>
        </Box>
    )
}

export default CounterBox