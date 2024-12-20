
export const routes = Object.freeze({
    home: "/",
    collection: "/collection",
    wallet: "/wallet-connect"
})

export interface IArtist {
    avatar: string;
    name: string;
}

export interface INFT {
    title: string;
    price: number;
    image: string
}

export interface ICollection {
    id: number;
    title: string;
    upperBTCPrice: string;
    lowerBTCPrice: string;
    NFTs: INFT[];
    collectionImage: string;
    description: string;
    artist: IArtist;
}

export interface IWallet {
    address: string,
    balance: number,
    nfts: INFT[]
}

export const userWallet: IWallet = {
    address: "STV6Q...4Z7WD",
    balance: 0.921,
    nfts: [] 
};


export const dummyCollections: ICollection[] = [
    {
        id: 1,
        title: "Night Sky Collection",
        upperBTCPrice: "0.35",
        lowerBTCPrice: "0.15",
        NFTs: [
            { title: "Celestial Horizon", price: 0.18, image: "nft-1.png" },
            { title: "Stellar Bloom", price: 0.20, image: "nft-2.png" },
            { title: "Galactic Waves", price: 0.22, image: "nft-3.png" },
            { title: "Nebula Dreams", price: 0.25, image: "nft-4.png" },
            { title: "Lunar Eclipse", price: 0.30, image: "nft-5.png" },
            { title: "Cosmic Voyage", price: 0.28, image: "nft-1.png" },
            { title: "Stellar Night", price: 0.32, image: "nft-2.png" },
            { title: "Astral Journey", price: 0.35, image: "nft-3.png" },
            { title: "Meteor Shower", price: 0.25, image: "nft-4.png" }
        ],
        collectionImage: "collection-1.png",
        description: "A mesmerizing collection of NFTs depicting the beauty of the night sky and its celestial wonders.",
        artist: {
            avatar: "artist-1.png",
            name: "Léa Jacquot"
        }
    },
    {
        id: 2,
        title: "Abstract Art Series",
        upperBTCPrice: "0.60",
        lowerBTCPrice: "0.30",
        NFTs: [
            { title: "Fractal Dreams", price: 0.35, image: "nft-1.png" },
            { title: "Color Symphony", price: 0.40, image: "nft-2.png" },
            { title: "Abstract Horizons", price: 0.45, image: "nft-3.png" },
            { title: "Geometric Flow", price: 0.50, image: "nft-4.png" },
            { title: "Waves of Color", price: 0.52, image: "nft-5.png" },
            { title: "Pixelated Pattern", price: 0.48, image: "nft-1.png" },
            { title: "Vibrant Vision", price: 0.55, image: "nft-2.png" },
            { title: "Cosmic Abstract", price: 0.60, image: "nft-3.png" },
            { title: "Abstract Journey", price: 0.50, image: "nft-4.png" }
        ],
        collectionImage: "collection-3.png",
        description: "A captivating series of abstract art, blending vibrant colors and intricate patterns to evoke deep emotions.",
        artist: {
            avatar: "artist-2.png",
            name: "Maxim Illusion"
        }
    },
    {
        id: 3,
        title: "Nature's Embrace",
        upperBTCPrice: "0.50",
        lowerBTCPrice: "0.18",
        NFTs: [
            { title: "Autumn Leaves", price: 0.22, image: "nft-1.png" },
            { title: "Mountain Serenity", price: 0.30, image: "nft-1.png" },
            { title: "Ocean Breeze", price: 0.28, image: "nft-1.png" },
            { title: "Sunset Over Hills", price: 0.35, image: "nft-1.png" },
            { title: "Blossoms in Spring", price: 0.32, image: "nft-1.png" },
            { title: "Foggy Mornings", price: 0.38, image: "nft-1.png" },
            { title: "Majestic Peaks", price: 0.40, image: "nft-1.png" },
            { title: "Waves of Calm", price: 0.42, image: "nft-1.png" },
            { title: "Crystal Clear Waters", price: 0.45, image: "nft-1.png" }
        ],
        collectionImage: "collection-3.png",
        description: "Experience the tranquility of nature through stunning visuals of autumn, mountains, and the sea.",
        artist: {
            avatar: "artist-3.png",
            name: "Aria Williams"
        }
    }
];
