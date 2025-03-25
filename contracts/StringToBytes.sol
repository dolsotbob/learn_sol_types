// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract StringToBytes {
    function convertToBytes(
        string memory str
    ) public pure returns (bytes memory) {
        return bytes(str);
    }
}
