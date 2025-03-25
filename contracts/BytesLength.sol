// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract BytesLength {
    function getLength(bytes memory data) public pure returns (uint) {
        return data.length;
    }
}
