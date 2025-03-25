// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringExampleModule = buildModule('StringExampleModule', (m) => {
  const stringExample = m.contract('StringExample');

  return { stringExample };
});

export default StringExampleModule;
