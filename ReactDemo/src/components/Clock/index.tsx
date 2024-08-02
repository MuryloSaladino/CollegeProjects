import { Box, Typography } from "@mui/material"
import dayjs from "dayjs"
import { useEffect, useState } from "react"

const Clock = () => {

    const [time, setTime] = useState(dayjs())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs())
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    return(
        <Box 
            sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: 150
            }}
        >
            <Typography variant="h4" textAlign="center">
                { time.format("HH:mm:ss") }
            </Typography>
        </Box>
    )
}

export default Clock