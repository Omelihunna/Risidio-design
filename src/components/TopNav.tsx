import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants/constants";
import WalletConnectButton from "./buttons/ConnectButton";

const TopNav: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Top Navigation Bar */}
            <div className="flex justify-between py-6 px-4 md:px-8 items-center">
                <Link
                    to={routes.home}
                    className="text-[32px] font-bold text-left text-[#23252b]"
                >
                    MARKETPLACE
                </Link>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-[#23252b] text-2xl focus:outline-none"
                    >
                        &#9776; {/* Hamburger Icon */}
                    </button>
                </div>
                <div className="hidden md:flex">
                    <WalletConnectButton />
                </div>
            </div>

            {/* Full-Screen Options Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 text-2xl text-gray-800 focus:outline-none"
                    >
                        &times; {/* Close Icon */}
                    </button>
                    <div className="flex flex-col gap-6 text-center">
                        <Link
                            to={routes.home}
                            onClick={toggleMenu}
                            className="text-xl font-bold text-gray-800 hover:underline"
                        >
                            Home
                        </Link>
                        <Link
                            to={routes.collection}
                            onClick={toggleMenu}
                            className="text-xl font-bold text-gray-800 hover:underline"
                        >
                            Collections
                        </Link>
                        <div>
                            <WalletConnectButton />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopNav;
