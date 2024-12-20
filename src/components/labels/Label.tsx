import React from "react"

interface ILabelProps {
    text: string;
    colour?: string;
}

const Label: React.FC<ILabelProps> = ({ text, colour }) => {
    console.log(colour)
    return (
        <div
            className="flex justify-center max-w-[150px] items-center relative gap-2.5 px-[35px] py-[9px] rounded-[49px]"
            style={{ backgroundColor: colour || "#e1edd9" }}
        >
            <p className="text-xs font-medium text-left text-[#23252b]">
                {text}
            </p>
        </div>
    )
}

export default Label