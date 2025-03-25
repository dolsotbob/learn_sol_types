// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract NestedMapping {
    mapping(address => mapping(uint256 => bool)) public permissions;

    function setPermission(address user, uint256 id, bool status) public {
        permissions[user][id] = status;
    }

    function hasPermission(
        address user,
        uint256 id
    ) public view returns (bool) {
        return permissions[user][id];
    }
}
