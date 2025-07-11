import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your existing BatchRegistry contract address
const batchRegistryAddress = "0xB0AAC3739B3C025DE1829BCA87FC9993e4a28721";

/**
 * Deploys the CheckIn contract using the deployer account and
 * constructor argument set to the existing BatchRegistry address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress],
    log: true,
    autoMine: true,
  });

  const checkInContract = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("\nCheckIn deployed to address", await checkInContract.getAddress());
};

export default deployCheckIn;

deployCheckIn.tags = ["CheckIn"];
