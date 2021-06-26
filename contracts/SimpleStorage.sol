// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;


contract SimpleStorage {
    uint256 public storedData;

    function set(uint256 x) public {
        storedData = x;
    }
}
