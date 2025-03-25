// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArrayPopModule = buildModule('ArrayPopModule', (m) => {
    const arrayPop = m.contract('ArrayPop');

    return { arrayPop };
});

export default ArrayPopModule;
