import Bannercard from "../components/cards/BannerCard";
import CollectionCard from "../components/cards/CollectionCard";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import { dummyCollections, ICollection } from "../constants/constants";

const DashboardPage: React.FC = () => {
    return (
        <div className="bg-white flex flex-col w-full">
            <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="flex flex-col w-fullmax-w-[1512px]">
                    <TopNav />
                    <Bannercard />
                    <div className="flex flex-col gap-7 mt-8">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-left text-black">
                            Collections
                        </p>
                        <div className="grid gap-4 sm:gap-6 md:gap-7 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
                            {
                                dummyCollections.map((collection: ICollection) => 
                                    <CollectionCard collectionData={collection} />
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

export default DashboardPage;
