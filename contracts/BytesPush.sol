// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract BytesPush {
    bytes public data;

    function addByte(bytes1 newByte) public {
        data.push(newByte);
    }
}
