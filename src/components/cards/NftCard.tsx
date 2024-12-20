import { useNavigate } from "react-router-dom"
import Label from "../labels/Label"
import { useWalletConnectContext } from "../../providers/WalletConnectContext"
import { INFT, routes, userWallet } from "../../constants/constants"

interface Cardprops {
    nftData: INFT
}

const NftCard: React.FC<Cardprops> = ({ nftData }) => {
    const { isConnected } = useWalletConnectContext()
    const navigate = useNavigate()

    const handleBuy = () => {
        if (!isConnected) {
            return navigate(routes.wallet)
        }
        if (userWallet.balance < nftData.price) {
            return alert("Insufficient BTC Balance")
        }
        userWallet.nfts.push(nftData)
        userWallet.balance -= nftData.price
        return alert(`You have successfully purchased the ${nftData.title}`)
    }

    return (
        <div className="max-w-[424px] h-[498px] flex flex-col gap-5 relative p-4 rounded-[47px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex group relative">
                <img
                    src={`/${nftData.image}`}
                    className="w-[391px] h-[345px] object-cover rounded-[34px]"
                    alt={nftData.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[34px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button onClick={handleBuy} className="bg-[#FAFAFA] p-6 rounded-full text-black hover:shadow-lg transition-shadow duration-200 min-w-60 justify-center">
                        <p className="text-center font-semibold">Buy</p>
                    </button>
                </div>
            </div>
            <div className="flex justify-between mt-3">
                <p className="text-2xl font-bold text-left text-black">{nftData.title}</p>
                <Label text={`${nftData.price} BTC`} colour="#D4D3EB" />
            </div>
        </div>
    )
}

export default NftCard
