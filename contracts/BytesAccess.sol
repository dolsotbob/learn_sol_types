// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract BytesAccess {
    function getByteAt(
        bytes memory data,
        uint256 index
    ) public pure returns (bytes1) {
        require(index < data.length, "Index out of bounds");
        return data[index];
    }
}
