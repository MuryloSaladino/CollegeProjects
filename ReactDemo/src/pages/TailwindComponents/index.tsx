import musics from "./songs.json"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Table from "./components/Table"
import Footer from "./components/Footer"
import { useState } from "react"
import Button from "./components/Button"
import Alert from "./components/Alert"

const TailwindComponents = () => {

    const columns = ["artist", "genre", "price"]

    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const handleClose = () => setAlert(false)
    const handleOpen = (message:string) => {
        setAlert(true)
        setAlertMessage(message)
    }

    return(
        <>
            <Alert
                message={alertMessage}
                onClose={handleClose}
                open={alert}
            />

            <Navbar/>

            <h2 id="cards" className="text-3xl text-center mt-40">Cards: </h2>
            <div className="flex justify-around items-center m-auto mt-10">
                {musics.map(music => (
                    <Card 
                        key={music.id}
                        title={music.name} 
                        description={`${music.artist} - ${music.featured.join(", ")}`} 
                        image={music.discography} 
                    />
                ))}
            </div>

            <h2 id="table" className="text-3xl text-center mt-40">Table: </h2>
            <div className="mt-10 m-auto max-w-2xl">
                <Table
                    columns={columns}
                    rows={musics}
                />
            </div>

            <h2 id="buttons" className="text-3xl text-center mt-40">Buttons: </h2>
            <div className="mt-10 mb-40 m-auto max-w-2xl flex gap-4">
                {musics.map(music => (
                    <Button 
                        key={music.id}
                        variant="lightblue"
                        onClick={() => handleOpen(music.name)}
                    >{ music.name }</Button>
                ))}
            </div>

            <Footer/>   
        </>
    )
}

export default TailwindComponents