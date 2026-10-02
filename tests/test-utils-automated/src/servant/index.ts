import { TestServant } from "@typia/template";
import { WorkerServer } from "tgrid";

/**
 * Opens the servant protocol for the parent suite's shared worker.
 *
 * The parent connector owns this process lifetime. Opening failure is fatal;
 * this entry neither selects fixtures nor computes test expectations.
 *
 * @evidence contracts/common.md#principled-implementation WorkerServer.open publishes the real TestServant instance using tgrid's supported request protocol, so the parent invokes the same execute owner used by the suite. Opening rejection sets a nonzero final status instead of only logging.
 * @evidence contracts/common.md#clear-and-simple-design One server and one servant expose the protocol; fixture discovery and assertions stay with TestServant and the case exports, while the parent owns connection closure.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No protocol method is patched and no case verdict is replaced. The actual server instance opens the actual servant, and failures remain visible to the process boundary.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies parent lifetime ownership, protocol purpose and opening failure behavior, rather than attributing assertion correctness to worker setup.
 */
export const main = async (): Promise<void> => {
  const server = new WorkerServer();
  await server.open(new TestServant());
};
main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
