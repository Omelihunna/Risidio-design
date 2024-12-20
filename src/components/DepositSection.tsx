import React from 'react';
import { FaCopy } from "react-icons/fa";
import subtract from "../assets/Subtract.svg";
import WideButton from './buttons/WideButton';
import { INFT, userWallet } from '../constants/constants';

interface DepositComponentProps {
    onShoppingClick?: () => any;
}

const DepositComponent: React.FC<DepositComponentProps> = ({ onShoppingClick }) => {
    return (
        <div className="absolute right-16 bg-white w-full h-full flex flex-col gap-14 sm:w-[492px] sm:h-[981px] p-6 shadow-lg transition-shadow duration-300 z-10 rounded-[21px]">
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='bg-[#29627F] w-12 h-12 rounded-full'></div>
                    <div className='flex my-auto'>
                        <p className="w-[141px] h-5 text-base text-center text-[#02071d]">{userWallet.address}</p>
                        <FaCopy />
                    </div>
                </div>
                <div className='my-auto flex'>
                    <img src={subtract} alt="" />
                </div>
            </div>
            <div className=''>
                <p className="text-sm text-left text-[#7b7b7b]">In your wallet</p>
                <p className="w-[267px] h-[52px] text-4xl font-semibold text-left text-[#02071d]">
                    {userWallet.balance} BTC
                </p>
            </div>
            <div className="h-full flex flex-col">
                <p className="text-2xl font-bold text-left text-black mb-6">Your NFTs</p>
                {
                    userWallet.nfts.length < 1 ? (
                        <div className="flex flex-col justify-center items-center gap-5 my-auto">
                            <p className="text-2xl text-center text-[#617587]">You don’t own any NFTs yet</p>
                            <WideButton dark={true} text="Start Shopping" onClick={onShoppingClick} />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 overflow-auto max-h-[calc(100vh-350px)] p-4">
                            {userWallet.nfts.map((nft: INFT) => (
                                <img src={nft.image} alt={nft.title} className="rounded-3xl" />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DepositComponent;
