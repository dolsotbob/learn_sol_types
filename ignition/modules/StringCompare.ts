// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringCompareModule = buildModule('StringCompareModule', (m) => {
    const stringCompare = m.contract('StringCompare');

    return { stringCompare };
});

export default StringCompareModule;
