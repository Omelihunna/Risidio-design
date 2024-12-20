import React from "react";
import TopNav from "../components/TopNav";
import { useWalletConnectContext } from "../providers/WalletConnectContext";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/constants";

const WalletConnectPage: React.FC = () => {
    const { connectWallet } = useWalletConnectContext();
    const navigate = useNavigate();

    const handleWalletConnection = () => {
        connectWallet()
        navigate(routes.collection)
    };

    return (
        <div className="bg-[#E6E9F2] w-full min-h-screen xs:px-10 lg:px-20">
            <TopNav />
            <div className="flex h-full mx-auto justify-center my-auto">
                <div className="flex flex-col">
                    <p className="text-[32px] font-bold text-center text-black">
                        Choose the wallet to connect
                    </p>
                    <div className="grid mx-auto my-20 xs:grid-cols-1 md:grid-cols-3 gap-16">
                        <div
                            onClick={handleWalletConnection}
                            className="bg-white w-40 h-40 rounded-[19px] cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <h1>1</h1>
                        </div>
                        <div
                            onClick={handleWalletConnection}
                            className="bg-white w-40 h-40 rounded-[19px] cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <h1>2</h1>
                        </div>
                        <div
                            onClick={handleWalletConnection}
                            className="bg-white w-40 h-40 rounded-[19px] cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default WalletConnectPage;
