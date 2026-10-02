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
 * @evidence contracts/testing.md#behavioral-verification Executes the fatal-event subprocess regression, generates both schema matrices and asks one servant to execute their selected exports. Success requires no returned case failures and no recorded fatal event; helper assertions own validation semantics.
 * @evidence contracts/testing.md#independent-expectations The process regression uses authored event inputs and required child status. Generated schema cases use authored fixtures, spoilers and injected surplus paths; this runner aggregates failures without calculating expected reports.
 * @evidence contracts/testing.md#distinguishing-cases The regression covers ordinary status and both fatal event kinds across three completion timings. Generated cases cover clean/spoiled values and clean/surplus graphs under include/exclude filters; an empty returned failure list cannot override sticky fatal state.
 * @evidence contracts/testing.md#execution-ownership The package start script invokes main. It awaits generation before one connected servant request and closes the connector in finally; top-level listener and rejection catch retain asynchronous and critical failure status. Cases keep their own discoverable failure identities.
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
