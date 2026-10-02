import { TestServant } from "@typia/template";
import { WorkerServer } from "tgrid";

/**
 * Opens the servant protocol for the parent suite's shared worker.
 *
 * The parent connector owns this process lifetime. Opening failure is fatal;
 * this entry neither selects fixtures nor computes test expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification This entry opens a real TestServant on the WorkerServer protocol without generating a case verdict. The parent calls execute and accumulates actual named case failures; the top-level catch logs an opening rejection and sets exitCode 1.
 * @evidence contracts/testing.md#independent-expectations Case helpers and composite assertions own expected product values independently of the worker protocol. Successful server opening alone certifies none of those assertions or case enrollment.
 * @evidence contracts/testing.md#distinguishing-cases The real open either establishes the supported parent/servant connection or rejects; this entry does not inject protocol or cancellation faults. Directory filters and per-case failures remain with the parent and TestServant.
 * @evidence contracts/testing.md#execution-ownership src/index.ts main connects to this file once after generation, retains the driver for every directory, and closes the connector in finally. This exported main owns opening; its anonymous rejection callback owns unsuccessful child status, and no separate test is registered here.
 */
export const main = async (): Promise<void> => {
  const server = new WorkerServer();
  await server.open(new TestServant());
};
main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
