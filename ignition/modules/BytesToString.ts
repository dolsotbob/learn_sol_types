// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BytesToStringModule = buildModule('BytesToStringModule', (m) => {
    const bytesToString = m.contract('BytesToString');

    return { bytesToString };
});

export default BytesToStringModule;
