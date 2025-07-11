// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface BatchRegistryInterface {
    function checkIn() external;
}
contract CheckIn {
    BatchRegistryInterface public batchRegistry;

    constructor(address _batchRegistry) {
        batchRegistry = BatchRegistryInterface(_batchRegistry);
    }

    function checkInCall() external {
        batchRegistry.checkIn(); // Type-safe call via interface
    }
}
