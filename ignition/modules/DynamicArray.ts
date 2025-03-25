// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DynamicArrayModule = buildModule('DynamicArrayModule', (m) => {
    const dynamicArray = m.contract('DynamicArray');

    return { dynamicArray };
});

export default DynamicArrayModule;
