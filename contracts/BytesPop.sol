// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract BytesPop {
    bytes public data = "Hello";

    function removeLast() public {
        data.pop();
    }
}
