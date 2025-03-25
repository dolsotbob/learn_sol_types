// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract BytesToString {
    function convertToString(
        bytes memory byteData
    ) public pure returns (string memory) {
        return string(byteData);
    }
}
