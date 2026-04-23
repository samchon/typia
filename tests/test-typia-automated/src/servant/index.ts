const { register } = require("@typia/ttsx");
const { WorkerServer } = require("tgrid");

register();

const main = async (): Promise<void> => {
  const { TestServant } = require("@typia/template");
  const server = new WorkerServer();
  await server.open(new TestServant());
};
main().catch(console.log);
