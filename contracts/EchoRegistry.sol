// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract EchoRegistry {
    struct Echo {
        address creator;
        string ipfsHash;
        string description;
        string location;
        uint256 timestamp;
    }

    Echo[] public echoes;
    mapping(address => uint256[]) public userEchoes;

    event EchoCreated(address indexed creator, uint256 indexed echoId, string ipfsHash, string location);

    function createEcho(string memory ipfsHash, string memory description, string memory location) external {
        uint256 id = echoes.length;
        echoes.push(Echo(msg.sender, ipfsHash, description, location, block.timestamp));
        userEchoes[msg.sender].push(id);
        emit EchoCreated(msg.sender, id, ipfsHash, location);
    }

    function getAllEchoes() external view returns (Echo[] memory) {
        return echoes;
    }

    function getUserEchoes(address user) external view returns (uint256[] memory) {
        return userEchoes[user];
    }
}
