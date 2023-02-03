import * as ethers from "ethers";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config()

async function main() {
  const wallet = new ethers.Wallet(process.env.ACCOUNT_PRIVATE_KEY);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PASSWORD,
    process.env.ACCOUNT_PRIVATE_KEY,
  );
  console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
