import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

const GoodMorningBox = () => {

    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState("Preciso saber seu nome!")

    const submit:SubmitHandler<FieldValues> = (data) => {
        setMessage(
            data.name.length > 0 ?
            `Bom dia, ${data.name}!` :
            "Preciso saber seu nome!"
        )
    }

    return(
        <Box
            component="form" 
            sx={{ 
                position: "relative",
                height: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center"
            }}
            onSubmit={handleSubmit(submit)}
        >
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                <TextField
                    label="Name"
                    { ...register("name") }
                    sx={{ width: "70%" }}
                />
                <Button variant="contained" type="submit">Pronto</Button>
            </Box>
            <Typography variant="h4" >{ message }</Typography>
        </Box>
    )
}

export default GoodMorningBox