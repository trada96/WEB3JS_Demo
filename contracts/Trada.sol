// SPDX-License-Identifier: MIT

pragma  solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Trada is ERC20 {

    constructor() ERC20("Trada", "ICETEA") {
        _mint(msg.sender,  1000000000*10**18);
    }

    // Replace Default 18 decimals
    function decimals() public view virtual override returns(uint8){
        return 8;
    }
}