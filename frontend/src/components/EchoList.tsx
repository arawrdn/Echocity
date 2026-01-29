import { useEffect, useState } from "react";

interface Echo {
  creator: string;
  ipfsHash: string;
  location: string;
}

export default function EchoList() {
  const [echoes, setEchoes] = useState<Echo[]>([]);

  useEffect(() => {
    // demo data (you can replace with contract call)
    setEchoes([
      { creator: "0xA1...", ipfsHash: "bafy...1", location: "Paris" },
      { creator: "0xB2...", ipfsHash: "bafy...2", location: "Tokyo" },
    ]);
  }, []);

  return (
    <div className="w-[90%] max-w-lg text-sm space-y-2">
      <h3 className="font-semibold text-lg mb-2">Recent Echoes</h3>
      {echoes.map((e, i) => (
        <div key={i} className="p-3 bg-gray-900 rounded-lg">
          <p><b>From:</b> {e.creator}</p>
          <p><b>Location:</b> {e.location}</p>
          <audio controls src={`https://ipfs.io/ipfs/${e.ipfsHash}`} className="mt-2 w-full" />
        </div>
      ))}
    </div>
  );
}
