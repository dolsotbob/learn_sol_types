// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ArrayPop {
    uint256[] public numbers = [10, 20, 30];

    function removeLast() public {
        numbers.pop();
    }
}
