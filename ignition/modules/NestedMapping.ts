// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NestedMappingModule = buildModule('NestedMappingModule', (m) => {
    const nestedMapping = m.contract('NestedMapping');

    return { nestedMapping };
});

export default NestedMappingModule; 
