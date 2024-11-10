const {expect } = require('chai');
const { ethers } = require('hardhat');

describe("ContractERC721", function(){

    it("should return correct name", async function() {
       
        const ContractERC721 = await hre.ethers.getContractFactory("ContractERC721");

        const ContractERC721Deployed = await ContractERC721.deploy("ContractERC721", "PTC");

        // await ContractERC721Deployed.deploy();

        expect(await ContractERC721Deployed.name()).to.equal("ContractERC721");

    });
});