import Bannercard from "../components/cards/BannerCard";
import NftCard from "../components/cards/NftCard";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import { dummyCollections, INFT } from "../constants/constants";

const CollectionPage: React.FC = () => {
    return (
        <div className="bg-white flex flex-col w-full">
            <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="flex flex-col w-full max-w-[1512px]">
                    <TopNav />
                    <div className="mt-6">
                        <Bannercard />
                    </div>
                    <div className="flex flex-col gap-7 mt-8">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-left text-black">
                            NFTs
                        </p>
                        <div className="grid gap-4 sm:gap-6 md:gap-7 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
                            {
                                dummyCollections[0].NFTs.map((nft: INFT) => 
                                    <NftCard nftData={nft} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollectionPage;
