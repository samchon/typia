import { WorkerServer } from "tgrid";

import { TestServant } from "./TestServant";

const main = async (): Promise<void> => {
  const server = new WorkerServer();
  await server.open(new TestServant());
};
main().catch(console.error);
