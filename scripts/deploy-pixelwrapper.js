const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const pixelmapwrapper = await ethers.getContractFactory("PixelMapWrapper");
  const instance = await pixelmapwrapper.deploy();

  console.log(instance);
  console.log(instance.address);

  // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
