// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    IBatchRegistry public batchRegistry;
    address public owner;
    
    event CheckedIn(address indexed eoa);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
    
    constructor(address _batchRegistry) {
        batchRegistry = IBatchRegistry(_batchRegistry);
        owner = msg.sender;
    }
    
    function checkMeIn() external {
        // BatchRegistry uses tx.origin to identify the user
        batchRegistry.checkIn();
        emit CheckedIn(tx.origin);
    }
}