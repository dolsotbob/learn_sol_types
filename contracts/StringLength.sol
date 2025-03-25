// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract StringLength {
    function getLength(string memory str) public pure returns (uint) {
        return bytes(str).length;
    }
}
