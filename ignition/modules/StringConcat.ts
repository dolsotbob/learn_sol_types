// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringConcatModule = buildModule('StringConcatModule', (m) => {
    const stringConcat = m.contract('StringConcat');

    return { stringConcat };
});

export default StringConcatModule;
