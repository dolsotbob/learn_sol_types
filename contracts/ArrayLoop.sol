// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ArrayLoop {
    uint256[] public numbers = [1, 2, 3, 4, 5];

    function sumArray() public view returns (uint256 sum) {
        for (uint256 i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
    }
}
