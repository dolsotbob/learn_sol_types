// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BytesAccessModule = buildModule('BytesAccessModule', (m) => {
    const bytesAccess = m.contract('BytesAccess');

    return { bytesAccess };
});

export default BytesAccessModule;
