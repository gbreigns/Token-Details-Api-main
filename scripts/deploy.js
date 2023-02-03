const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  const initsupply = 1000 * 10 ** decimals()

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TestToken");
  const token = await Token.deploy(initsupply);

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
