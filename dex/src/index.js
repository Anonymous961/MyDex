import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {configureChains, mainnet, WagmiConfig, createClient} from "wagmi"
import { publicProvider } from '@wagmi/core/providers/public'

const { provider, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketPublicClient,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <WagmiConfig client={client}>

      <BrowserRouter>
        <App />
      </BrowserRouter>
  </WagmiConfig>
  </React.StrictMode>
);
