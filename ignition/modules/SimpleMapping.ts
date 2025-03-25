// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimpeMappingModule = buildModule('SimpleMappingtModule', (m) => {
    const simpleMapping = m.contract('SimpleMapping');

    return { simpleMapping };
});

export default SimpeMappingModule;
