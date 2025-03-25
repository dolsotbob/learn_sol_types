// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ArrayDelete {
    uint256[] public numbers = [10, 20, 30, 40];

    function removeElement(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        delete numbers[index];
    }
}
