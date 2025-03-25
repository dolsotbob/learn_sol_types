// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ArrayLength {
    uint256[] public numbers = [1, 2, 3, 4];

    function getLength() public view returns (uint256) {
        return numbers.length;
    }
}
