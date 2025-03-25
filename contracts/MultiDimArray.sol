// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract MultiDimArray {
    uint256[][] public matrix;

    function addRow(uint256[] memory row) public {
        matrix.push(row);
    }
}
