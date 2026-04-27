import { TestServant } from "@typia/template";
import { WorkerServer } from "tgrid";

const main = async (): Promise<void> => {
  const server = new WorkerServer();
  await server.open(new TestServant());
};
main().catch(console.log);
