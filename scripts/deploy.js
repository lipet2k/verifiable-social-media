const hre = require("hardhat");

async function main() {
    const verifier = await hre.ethers.deployContract("Verifier");
    await verifier.waitForDeployment();

    console.log(
        `Verifier deployed to ${verifier.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});