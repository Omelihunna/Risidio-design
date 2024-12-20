import React, { createContext, useState, useContext, ReactNode } from 'react';

type WalletConnectContextType = {
    isConnected: boolean;
    connectWallet: () => void;
    disconnectWallet: () => void;
};

const WalletConnectContext = createContext<WalletConnectContextType>({
    isConnected: false, 
    connectWallet: () => {},
    disconnectWallet: () => {},
});

export const useWalletConnectContext = () => {
    return useContext(WalletConnectContext);
};

interface WalletConnectProviderProps {
    children: ReactNode;
}

const WalletConnectProvider: React.FC<WalletConnectProviderProps> = ({ children }) => {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    
    const connectWallet = () => {
        setIsConnected(true);
    };
    
    const disconnectWallet = () => {
        setIsConnected(false);
    };

    return (
        <WalletConnectContext.Provider value={{ isConnected, connectWallet, disconnectWallet }}>
            {children}
        </WalletConnectContext.Provider>
    );
};

export { WalletConnectContext, WalletConnectProvider };
