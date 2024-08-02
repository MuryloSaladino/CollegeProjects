interface ICardProps {
    title: string;
    description: string;
    image: string;
} 

const Card = ({ title, description, image }:ICardProps) => {

    return(
        <div className="border-l-indigo-600 shadow-md rounded p-4 flex flex-col gap-3 w-64 transition-all hover:scale-110">
            <img src={image} className="w-full object-cover"/>
            <h3 className="text-xl">{ title }</h3>
            <p className="text-sm">{ description }</p>
        </div>
    )
}

export default Card