// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArrayDeleteModule = buildModule('ArrayDeleteModule', (m) => {
    const arrayDelete = m.contract('ArrayDelete');

    return { arrayDelete };
});

export default ArrayDeleteModule;
