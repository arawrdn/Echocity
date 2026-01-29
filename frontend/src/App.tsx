import { useState } from "react";
import WalletConnector from "./components/WalletConnector";
import AudioUploader from "./components/AudioUploader";
import MapView from "./components/MapView";
import EchoList from "./components/EchoList";

export default function App() {
  const [address, setAddress] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mt-6">🌐 EchoCity</h1>
      <p className="text-sm opacity-70">Leave your voice on the decentralized map of echoes.</p>

      {!address ? (
        <WalletConnector onConnect={setAddress} />
      ) : (
        <div className="w-full flex flex-col items-center gap-6">
          <AudioUploader address={address} />
          <MapView />
          <EchoList />
        </div>
      )}
    </div>
  );
}
