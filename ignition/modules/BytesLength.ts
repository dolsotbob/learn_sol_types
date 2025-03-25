// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BytesLengthModule = buildModule('BytesLengthModule', (m) => {
    const bytesLength = m.contract('BytesLength');

    return { bytesLength };
});

export default BytesLengthModule;
