const {expect } = require('chai');
const { ethers } = require('hardhat');

describe("ContractERC721", function(){

    it("should return correct name", async function() {
       
        const ContractERC721 = await hre.ethers.getContractFactory("ContractERC721");

        const ContractERC721Deployed = await ContractERC721.deploy("Protocol", "PTC");

        expect(await ContractERC721Deployed.name()).to.equal("Protocol");

    });
});
