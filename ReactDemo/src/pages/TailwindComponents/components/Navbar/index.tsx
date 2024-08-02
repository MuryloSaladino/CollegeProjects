import ReactLogo from "/react.svg"

const Navbar = () => {


    return(
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-400">
            <img src={ReactLogo} alt="logo" className="w-10"/>
            <div className="flex gap-8">
                <a className="text-lg" href="#cards">Cards</a>
                <a className="text-lg" href="#buttons">Buttons</a>
                <a className="text-lg" href="#table">Table</a>
            </div>
        </header>
    )
}

export default Navbar