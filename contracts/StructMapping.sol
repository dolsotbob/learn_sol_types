// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract StructMapping {
    struct User {
        string name;
        uint256 balance;
    }

    mapping(address => User) public users;

    function setUser(
        address _addr,
        string memory _name,
        uint256 _balance
    ) public {
        users[_addr] = User(_name, _balance);
    }

    function getUser(
        address _addr
    ) public view returns (string memory, uint256) {
        return (users[_addr].name, users[_addr].balance);
    }
}
