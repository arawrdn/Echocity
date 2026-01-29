import { Web3Storage, File } from "web3.storage";

const client = new Web3Storage({ token: "<YOUR_WEB3_STORAGE_TOKEN>" });

export async function uploadToIPFS(file: File) {
  const cid = await client.put([file]);
  return cid;
}
