import Image from "next/image";

type ButtonPrps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string
}

const Button = ({ type, title, icon, variant }: ButtonPrps) => {
    return (
        <button
            className={`flexCenter gap-3 rounded-full border ${variant}`}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label htmlFor="" className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    )
}

export default Button