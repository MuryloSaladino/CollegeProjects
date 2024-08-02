import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"

const ToggleVisible = () => {

    const [visible, setVisible] = useState(true)

    return(
        <Box 
            sx={{ 
                position: "relative",
                height: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            {  visible && <Typography variant="h4" textAlign="center">Olha um texto!</Typography>  }
            <Button 
                sx={{ position: "absolute", bottom: 0 }}
                fullWidth
                variant="contained"
                onClick={() => setVisible(prev => !prev)}
            >Toggle</Button>
        </Box>
    )
}

export default ToggleVisible