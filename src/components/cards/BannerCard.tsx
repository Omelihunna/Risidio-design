import React from "react";
import Label from "../labels/Label";
import WideButton from "../buttons/WideButton";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/constants";

const Bannercard: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="flex lg:flex-row xs:flex-col-reverse xs:justify-center xs:gap-10 rounded-[30px] w-full bg-[#E6E9F2] p-10 xl:px-20 lg:justify-between my-10">
            <div className="flex flex-col gap-7 mx-auto my-auto">
                <Label text="Trending Now" colour="#FADFE4" />
                <div>
                    <p className="text-2xl text-left text-[#617587]">
                        Night sky collection
                    </p>
                    <p className="text-[64px] leading-none font-bold text-left text-black">
                        With the stars
                    </p>
                </div>
                {location.pathname == routes.collection && <div>
                    <p className="w-[630px] h-[106px] text-base text-left text-[#23252b]">
                        Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit
                        amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur
                        adicing elit, sed do eiusmod tempo
                    </p>
                </div>}
                <div className="flex gap-5">
                    <div>
                        <img src="artist-1.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="my-auto">
                        <p className="text-xs text-left text-[#617587]">
                            Artist
                        </p>
                        <p className="text-2xl leading-none text-left text-[#23252b]">
                            Léa Jacquot
                        </p>
                    </div>
                </div>
                {location.pathname !== routes.collection && <div className="flex xs:flex-col md:flex-row mx-auto gap-5">
                    <WideButton dark={true} text="Buy" onClick={() => navigate(routes.collection)} />
                    <WideButton text="See Collection" onClick={() => navigate(routes.collection)} />
                </div>}
            </div>
            <div className="mx-auto">
                <img src="rectangle-3.png" className="w-[437px] h-[411px] rounded-[52px] object-none" />
            </div>
        </div>
    )
}

export default Bannercard