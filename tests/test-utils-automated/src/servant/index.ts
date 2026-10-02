import { TestServant } from "@typia/template";
import { WorkerServer } from "tgrid";

/**
 * Opens the servant protocol for the parent suite's shared worker.
 *
 * The parent connector owns this process lifetime. Opening failure is fatal;
 * this entry neither selects fixtures nor computes test expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Opens the real TestServant request protocol used to discover generated assertions and return their failures. This entry performs no value assertion; opening rejection reaches a catch that sets a nonzero exit status.
 * @evidence contracts/testing.md#independent-expectations Fixture generators, SPOILERS and surplus mutations provide case expectations. The server forwards execution without deriving or replacing their reports.
 * @evidence contracts/testing.md#distinguishing-cases The parent supplies include/exclude inputs for the two matrices; each discovered export retains its clean and invalid distinctions. This server does not introduce another fixture population or oracle.
 * @evidence contracts/testing.md#execution-ownership Parent main creates one WorkerConnector and loads this worker entry. TestServant owns DynamicExecutor discovery and each export owns its assertions; the parent closes the connector in finally.
 */
export const main = async (): Promise<void> => {
  const server = new WorkerServer();
  await server.open(new TestServant());
};
main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
