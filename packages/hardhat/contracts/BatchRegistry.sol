//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BatchGraduationNFT.sol";

contract BatchRegistry is Ownable {
    uint16 public immutable BATCH_NUMBER;
    BatchGraduationNFT public batchGraduationNFT;

    mapping(address => bool) public allowList;
    mapping(address => address) public yourContractAddress;
    mapping(address => uint256) public graduatedTokenId;
    mapping(address => bool) public graduationAllowList;
    bool public isOpen = true;
    uint256 public checkedInCounter;

    event CheckedIn(bool first, address builder, address checkInContract);

    // Errors
    error BatchNotOpen();
    error NotAContract();
    error NotInAllowList();
    error AlreadyGraduated();
    error NotCheckedIn();
    error NotInGraduationAllowList();

    modifier batchIsOpen() {
        if (!isOpen) revert BatchNotOpen();
        _;
    }

    modifier senderIsContract() {
        if (tx.origin == msg.sender) revert NotAContract();
        _;
    }

    constructor(address initialOwner, uint16 batchNumber) Ownable(initialOwner) {
        batchGraduationNFT = new BatchGraduationNFT(address(this));
        BATCH_NUMBER = batchNumber;
    }

    function updateAllowList(address[] calldata builders, bool[] calldata statuses) public onlyOwner {
        require(builders.length == statuses.length, "Builders and statuses length mismatch");

        for (uint256 i = 0; i < builders.length; i++) {
            allowList[builders[i]] = statuses[i];
        }
    }

    function updateGraduationAllowList(address[] calldata builders, bool[] calldata statuses) public onlyOwner {
        require(builders.length == statuses.length, "Builders and statuses length mismatch");

        for (uint256 i = 0; i < builders.length; i++) {
            graduationAllowList[builders[i]] = statuses[i];
        }
    }

    function toggleBatchOpenStatus() public onlyOwner {
        isOpen = !isOpen;
    }

    function checkIn() public senderIsContract batchIsOpen {
        if (!allowList[tx.origin]) revert NotInAllowList();

        bool wasFirstTime;
        if (yourContractAddress[tx.origin] == address(0)) {
            checkedInCounter++;
            wasFirstTime = true;
        }

        yourContractAddress[tx.origin] = msg.sender;
        emit CheckedIn(wasFirstTime, tx.origin, msg.sender);
    }

    function graduate() public {
        if (graduatedTokenId[msg.sender] != 0) revert AlreadyGraduated();
        if (yourContractAddress[msg.sender] == address(0)) revert NotCheckedIn();
        if (!graduationAllowList[msg.sender]) revert NotInGraduationAllowList();

        uint256 newTokenId = batchGraduationNFT.mint(msg.sender);
        graduatedTokenId[msg.sender] = newTokenId;
    }

    // Withdraw function for admins in case some builders don't end up checking in
    function withdraw() public onlyOwner {
        (bool success,) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Failed to withdraw");
    }

    receive() external payable {}
}
