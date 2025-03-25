// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract RemoveAndShift {
    uint256[] public numbers = [10, 20, 30, 40];

    function removeAt(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        for (uint256 i = index; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers.pop();
    }
}
