const { ethers } = require("hardhat");

async function main () {
    
    const ContractERC721 = await ethers.getContractFactory("ContractERC721");

    const ContractERC721Deployed = await ContractERC721.deploy("Protocol","PTC");

    await ContractERC721Deployed.waitForDeployment(); 

    console.log("Deployed contract to: ", ContractERC721Deployed.target);
}
main()
    .catch((error) => {console.error(error)
        process.exit(1);
    });
