import { Link } from "react-router-dom"
import Label from "../labels/Label"
import { ICollection } from "../../constants/constants"

interface CollectionCardProps {
    collectionData: ICollection
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collectionData }) => {
    return (
        <div className="max-w-[424px] h-[529px] flex flex-col gap-5 relative p-4 rounded-[47px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative group">
                <img src={`/${collectionData.collectionImage}`} alt={collectionData.title} className="rounded-[34px] w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[34px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to="/collection" className="bg-[#FAFAFA] p-6 rounded-full text-black hover:shadow-lg transition-shadow duration-200">
                        <p>Go to collection --&gt;</p>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between mt-3">
                <p className="text-2xl font-bold text-left text-black">{collectionData.title}</p>
                <Label text={`${collectionData.upperBTCPrice} NTF` } />
            </div>
                <div>
                    <p className="text-sm text-left text-[#617587]">Price Range: {`${collectionData.lowerBTCPrice} - ${collectionData.upperBTCPrice} BTC`}</p>
                    <p className="max-w-[369px] h-[72px] text-base text-left text-[#23252b]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                    </p>
                </div>
                <div className="flex gap-5">
                    <div>
                        <img src={`/${collectionData.artist.avatar}`} alt="Artist Avatar" className="w-10 h-10" />
                    </div>
                    <div>
                        <p className="text-xs text-left text-[#617587]">Artist</p>
                        <p className="text-base text-left text-[#23252b]">{collectionData.artist.name}</p>
                    </div>
                </div>
        </div>
    )
}

export default CollectionCard
