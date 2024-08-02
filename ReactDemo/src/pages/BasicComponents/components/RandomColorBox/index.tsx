import { Box, Button } from "@mui/material"
import { useState } from "react"

const RandomColorBox = () => {

    const getRandomColor = () => `
        rgb(${Math.floor(Math.random() * (255 - 100) + 100)}, 
            ${Math.floor(Math.random() * (255 - 100) + 100)}, 
            ${Math.floor(Math.random() * (255 - 100) + 100)})
    `

    const [color, setColor] = useState(getRandomColor())

    return(
        <Box 
            sx={{ 
                position: "relative",
                height: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: color
            }}
        >
            <Button
                sx={{ width: "100%", height: "100%", fontSize: "1.5rem", color: "black" }}
                onClick={() => setColor(getRandomColor())}
            >Change Color</Button>
        </Box>
    )
}

export default RandomColorBox