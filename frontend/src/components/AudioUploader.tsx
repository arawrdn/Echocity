import { useState } from "react";
import { uploadToIPFS } from "../lib/ipfs";

export default function AudioUploader({ address }: { address: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  async function handleUpload() {
    if (!file) return;
    setStatus("Uploading to IPFS...");
    const ipfsHash = await uploadToIPFS(file);
    setStatus(`Uploaded: ${ipfsHash}`);
  }

  return (
    <div className="text-center space-y-3">
      <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="px-4 py-2 bg-green-600 rounded-lg">Upload Sound</button>
      <p className="text-xs opacity-70">{status}</p>
    </div>
  );
}
