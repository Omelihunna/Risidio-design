import React, { useState, useEffect } from "react";
import { useWalletConnectContext } from "../../providers/WalletConnectContext";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/constants";
import DepositComponent from "../DepositSection";

interface WalletConnectButtonProps {
    dark?: boolean;
    onClick?: () => void;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({ }) => {
    const { isConnected } = useWalletConnectContext();
    const navigate = useNavigate();
    const [showPopover, setShowPopover] = useState(false);

    const handleClick = () => {
        if (!isConnected) {
            return navigate(routes.wallet);
        }
        setShowPopover(!showPopover);
    };

    useEffect(() => {
        if (isConnected) {
            setTimeout(() => setShowPopover(false), 100000);
        }
    }, [isConnected]);

    return (
        <div className="relative">
            <div
                onClick={handleClick}
                className={`flex border border-black justify-center items-center w-[248px] relative gap-4 p-6 rounded-[87px] cursor-pointer`}
            >
                <p className="text-base font-semibold text-left text-black">
                    {isConnected ? "Account" : "Connect Wallet"}
                </p>
            </div>
            {showPopover && isConnected && (
                <DepositComponent />
            )}
        </div>
    );
};

export default WalletConnectButton;
