// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ArrayAccess {
    uint256[] public numbers = [5, 10, 15];

    function getValue(uint256 index) public view returns (uint256) {
        return numbers[index];
    }
}
