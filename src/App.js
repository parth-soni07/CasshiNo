import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "CasinoLend",
  projectId: "e2438f5053ef819e9aaf502c378745b3",
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="App">
            <Header setCurrentSection={setCurrentSection} />
            <Main currentSection={currentSection} />
            <Footer />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
