import React, { useState, setState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Table from "./pages/Table";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "CasinoLend",
  projectId: "e2438f5053ef819e9aaf502c378745b3",
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  const stockData = [
    { name: "Stock 1", price: 100 },
    { name: "Stock 2", price: 200 },
    { name: "Stock 3", price: 300 },
    { name: "Stock 4", price: 200 },
    { name: "Stock 5", price: 200 },
  ];
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="App">
                  <Main />
                  <Footer />
                </div>
              }
            />
            <Route path="/borrow" element={<Table stocks={stockData}/>} />
          </Routes>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
