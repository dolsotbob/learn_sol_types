// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringToBytesModule = buildModule('StringToBytesModule', (m) => {
    const stringToBytes = m.contract('StringToBytes');

    return { stringToBytes };
});

export default StringToBytesModule;