import { useEffect } from "react";

interface IAlertProps {
    open: boolean;
    onClose: () => void;
    message: string;
}

const Alert = ({ open, onClose, message }:IAlertProps) => {

    useEffect(() => {
        setTimeout(() => onClose(), 5000)
    }, [open])

    return(
        <div className={"z-50 w-64 p-4 fixed top-6 left-0 right-0 m-auto bg-blue-500 rounded-lg " + (open ? "flex justify-center items-center" : "hidden")}>
            <p className="text-center text-lg">{ message }</p>
        </div>
    )
}

export default Alert