// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    address public immutable owner = 0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411;
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkMeIn() external {
        require(msg.sender == owner, "Not authorized");
        batchRegistry.checkIn();
    }
}
