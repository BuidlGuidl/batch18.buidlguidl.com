import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "18";

// Real BatchRegistry address on Arbitrum
const ARBITRUM_BATCH_REGISTRY_ADDRESS = "0xB0AAC3739B3C025DE1829BCA87FC9993e4a28721";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network arbitrum`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Debug: Log the network information
  console.log("Network name:", hre.network.name);
  console.log("Network config:", hre.network.config);
  console.log("Chain ID:", hre.network.config.chainId);

  if (hre.network.name === "arbitrum") {
    // On Arbitrum: Only deploy CheckIn contract, use existing BatchRegistry
    console.log("Deploying to Arbitrum network");

    await deploy("CheckIn", {
      from: deployer,
      args: [ARBITRUM_BATCH_REGISTRY_ADDRESS],
      log: true,
      autoMine: true,
    });

    const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
    const checkInAddress = await checkIn.getAddress();
    console.log("CheckIn contract deployed to Arbitrum:", checkInAddress);
    console.log("Using BatchRegistry at:", ARBITRUM_BATCH_REGISTRY_ADDRESS, "\n");
  } else {
    // Local deployment: Deploy both BatchRegistry and CheckIn
    console.log("Deploying locally (not Arbitrum)");

    await deploy("BatchRegistry", {
      from: deployer,
      // Contract constructor arguments
      args: [deployer, BATCH_NUMBER],
      log: true,
      // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
      // automatically mining the contract deployment transaction. There is no effect on live networks.
      autoMine: true,
    });

    // Get the deployed contract to interact with it after deploying.
    const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
    const batchRegistryAddress = await batchRegistry.getAddress();
    console.log("\nBatchRegistry deployed to:", batchRegistryAddress);
    console.log("Remember to update the allow list!\n");

    // The GraduationNFT contract is deployed on the BatchRegistry constructor.
    const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
    console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");

    // Deploy the CheckIn contract, passing the BatchRegistry address
    await deploy("CheckIn", {
      from: deployer,
      args: [batchRegistryAddress],
      log: true,
      autoMine: true,
    });

    const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
    const checkInAddress = await checkIn.getAddress();
    console.log("CheckIn contract deployed to:", checkInAddress, "\n");
  }
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry"];
