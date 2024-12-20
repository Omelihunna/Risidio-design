import React from "react";
import socials from "/socials.svg"

const Footer: React.FC = () => {
    return (
        <div className="w-full h-20 p-8 bg-[#E6E9F2] flex justify-between mt-10">
            <div className="flex my-auto">
                <p className="xs:text-[16px] md:text-[32px] leading-none font-bold text-left text-[#23252b]">
                    MARKETPLACE
                </p>
            </div>
            <div className="my-auto">
                <img src={socials} alt="" className="xs:max-w-[100px] md:max-w-[250px]"/>
            </div>
        </div>
    )
}

export default Footer