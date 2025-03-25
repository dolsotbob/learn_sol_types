// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArrayAccessModule = buildModule('ArrayAccessModule', (m) => {
    const arrayAccess = m.contract('ArrayAccess');

    return { arrayAccess };
});

export default ArrayAccessModule;
