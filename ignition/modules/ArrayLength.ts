// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArrayLengthModule = buildModule('ArrayLengthModule', (m) => {
    const arrayLength = m.contract('ArrayLength');

    return { arrayLength };
});

export default ArrayLengthModule;
