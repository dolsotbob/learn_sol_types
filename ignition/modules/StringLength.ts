// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringLengthModule = buildModule('StringLengthModule', (m) => {
    const stringLength = m.contract('StringLength');

    return { stringLength };
});

export default StringLengthModule;