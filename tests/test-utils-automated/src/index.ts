import { TestProcessFailure, TestServant } from "@typia/template";
import { WorkerConnector } from "tgrid";

import { TestAutomation } from "./TestAutomation";
import { TestGlobal } from "./TestGlobal";
import { test_process_fatal_events } from "./regressions/test_process_fatal_events";

/**
 * Generates both OpenAPI matrices before running one shared servant worker.
 *
 * Cases retain their discoverable names and failures while sharing the native
 * schema project; a fatal asynchronous listener state also prevents success.
 *
 * @evidence contracts/common.md#principled-implementation Awaited generation completes both populations before connection. One servant executes the full features tree with unchanged include/exclude filters, and success requires both no returned errors and no recorded fatal event.
 * @evidence contracts/common.md#clear-and-simple-design One generator phase, connector lifetime and execution call separate preparation from assertions. Cases own validation comparisons; the runner aggregates results and owns final status.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No fixture or expected validation report is substituted here. Every generated case reaches the normal servant, and fatal listener state cannot be overridden by an otherwise empty returned-error list.
 * @evidence contracts/common.md#meaningful-documentation Native prose explains complete preparation, shared project and final fatal-state ownership; it does not claim that a shared process proves oracle correctness.
 * @evidence contracts/portability.md#os-neutral-implementation Node module paths and the existing TestGlobal root identify the installed workspace; tgrid owns process creation and protocol arguments. The runner constructs no shell command or OS-specific executable spelling.
 * @evidence contracts/performance.md#efficient-algorithms Generation traverses the selected ordinary/equality matrices once, and one servant request visits the generated tree. Local failure storage grows with reported failures and worker module state with executed entries.
 * @evidence contracts/performance.md#reuse-equivalent-work Both matrices consume one completed source/dependency/plugin-input population, permitting one project/worker load. Every assertion helper generates its scenario values separately; schema state is not rewritten during execution.
 * @evidence contracts/performance.md#bound-retention-and-release-resources This invocation owns one connector and local result list; finally closes the connector after success, execution failure or connection rejection. Node/tgrid owns process termination, and no historical worker population is retained by the runner.
 */
export async function main(): Promise<void> {
  test_process_fatal_events();
  await TestAutomation.generate();

  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];
  const exceptions: Error[] = [];

  const connector = new WorkerConnector(null, null, "process");
  try {
    await connector.connect(`${TestGlobal.ROOT}/src/servant/index.ts`);
    const servant = connector.getDriver<TestServant>();
    exceptions.push(
      ...(await servant.execute({
        location: `${TestGlobal.ROOT}/src/features`,
        include,
        exclude,
      })),
    );
  } finally {
    await connector.close();
  }

  if (exceptions.length === 0 && failure.failed() === false) {
    console.log("Success");
  } else {
    for (const exp of exceptions) console.log(exp);
    console.log("Failed");
    process.exit(-1);
  }
}

const failure: TestProcessFailure.IListener = TestProcessFailure.listen();
main().catch((error) => {
  console.log("critical error", error);
  process.exit(-1);
});
