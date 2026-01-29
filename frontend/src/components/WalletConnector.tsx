import { connectEvmWallet } from "../lib/evm";
import { googleSignIn } from "../lib/googleAuth";

export default function WalletConnector({ onConnect }: { onConnect: (addr: string) => void }) {
  async function handleEvm() {
    const addr = await connectEvmWallet();
    onConnect(addr);
  }

  async function handleGoogle() {
    const user = await googleSignIn();
    alert(`Signed in as ${user.email}`);
  }

  return (
    <div className="flex flex-col gap-3 text-center">
      <button onClick={handleEvm} className="px-4 py-2 bg-blue-600 rounded-lg">Connect Wallet</button>
      <button onClick={handleGoogle} className="px-4 py-2 bg-red-500 rounded-lg">Sign In with Google</button>
    </div>
  );
}
