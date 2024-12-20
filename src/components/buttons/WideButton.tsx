import React from "react";

interface WideButtonProps {
    dark?: boolean;
    onClick?: () => void;
    text:  string
}

const WideButton: React.FC<WideButtonProps> = ({ dark = false, onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className={`flex border border-black justify-center items-center w-[248px] relative gap-4 p-6 rounded-[87px] ${
                dark ? "bg-[#23252b]" : ""
            }`}
        >
            <p className={`text-base font-semibold text-left ${dark ? "text-neutral-50" : "text-black"}`}>
                {text}
            </p>
        </button>
    );
};

export default WideButton;