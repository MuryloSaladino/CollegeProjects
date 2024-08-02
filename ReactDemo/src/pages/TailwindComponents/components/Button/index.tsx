import { forwardRef, ReactNode } from "react"

interface IButtonProps {
    children: ReactNode;
    variant?: "lightblue" | "darkblue" | "gray" | "white";
    rounded?: boolean;
    onClick: () => void
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ children, variant, rounded, onClick }, ref) => {

    return(
        <button 
            onClick={onClick}
            ref={ref}
            className={`
                p-4 rounded-md 
                ${ variant ? 
                    (
                        variant == "lightblue" ? "bg-blue-100" : 
                        variant == "darkblue" ? "bg-blue-900" : 
                        variant == "gray" ? "bg-gray-500" : 
                        "bg-white"
                    ) : "bg-white"
                } 
                ${ rounded && "rounded" }
            `}
        >
            { children }
        </button>
    )
})

export default Button