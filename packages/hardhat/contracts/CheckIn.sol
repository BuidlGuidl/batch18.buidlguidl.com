//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry, address initialOwner) Ownable(initialOwner) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function performCheckIn() external {
        batchRegistry.checkIn();
    }

    function performCheckInAsOwner() external onlyOwner {
        batchRegistry.checkIn();
    }
} 