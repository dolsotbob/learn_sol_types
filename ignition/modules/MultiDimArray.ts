// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MultiDimArrayModule = buildModule('MultiDimArrayModule', (m) => {
    const multiDimArray = m.contract('MultiDimArray');

    return { multiDimArray };
});

export default MultiDimArrayModule;
