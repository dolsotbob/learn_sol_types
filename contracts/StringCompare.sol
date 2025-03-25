// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract StringCompare {
    function isEqual(
        string memory str1,
        string memory str2
    ) public pure returns (bool) {
        return
            keccak256(abi.encodePacked(str1)) ==
            keccak256(abi.encodePacked(str2));
    }
}
