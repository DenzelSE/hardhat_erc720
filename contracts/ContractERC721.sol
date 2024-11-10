
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ContractERC721 is ERC721 {
    uint256 public tokenCounter;
    
    constructor(string memory name, string memory symbol) 
    ERC721(name, symbol){
        tokenCounter = 0;

    }

    function _Mint(address recipient) public {
        _safeMint(recipient, tokenCounter);
        tokenCounter++;
    }

}