// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract DynamicArray {
    uint256[] public numbers;

    function addNumber(uint256 num) public {
        numbers.push(num);
    }
}
