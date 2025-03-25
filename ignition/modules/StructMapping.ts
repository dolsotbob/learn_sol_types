// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StructMappingModule = buildModule('StructMappingModule', (m) => {
    const structMapping = m.contract('StructMapping');

    return { structMapping };
});

export default StructMappingModule;