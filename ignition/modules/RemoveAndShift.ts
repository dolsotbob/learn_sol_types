// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RemoveAndShiftModule = buildModule('RemoveAndShiftModule', (m) => {
    const removeAndShift = m.contract('RemoveAndShift');

    return { removeAndShift };
});

export default RemoveAndShiftModule;
