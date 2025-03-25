// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract SimpleMapping {
    mapping(address => uint256) public balances;

    function setBalance(address user, uint256 amount) public {
        balances[user] = amount;
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
