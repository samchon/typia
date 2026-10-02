import { TestProcessFailure, TestServant } from "@typia/template";
import { WorkerConnector } from "tgrid";

import { TestGlobal } from "./TestGlobal";
import { TestAutomationController } from "./build/TestAutomationController";
import { runNativeProfiles } from "./native-profiles/TestNativeProfiles";
import { test_direct_factory_matrix } from "./regressions/test_direct_factory_matrix";
import { test_process_fatal_events } from "./regressions/test_process_fatal_events";

/**
 * Generates the complete feature matrix before executing it in one worker.
 *
 * Keeping generation ahead of worker loading prevents a compiler project from
 * observing partially generated input. Each directory retains its own named
 * executions and failures while sharing native preparation across families.
 *
 * @evidence contracts/testing.md#behavioral-verification main invokes the fatal-event regression, verifies the freshly generated direct/factory population, and collects actual TestServant and native-profile failures before deciding the process result. It owns aggregate success/failure reporting rather than any operation's data assertion.
 * @evidence contracts/testing.md#independent-expectations The assertion helpers, authored fixture inputs and composite literals own callback expectations. The runner requires no recorded case errors and no fatal listener state; it does not derive expected data from emitted output.
 * @evidence contracts/testing.md#distinguishing-cases A directory execution rejection is recorded without suppressing later directories, connector failures and close failures are recorded, and failed native profiles contribute errors. Include/exclude filters choose cases without substituting their verdicts; this entry does not itself inject failures into each aggregation branch.
 * @evidence contracts/testing.md#execution-ownership The package start script invokes this exported entry. Controller visitor callbacks collect completed locations, TestServant discovers matching generated/composite exports, runNativeProfiles executes incompatible projects, and the top-level rejection callback terminates an unsuccessful invocation.
 */
export async function main(): Promise<void> {
  test_process_fatal_events();
  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];

  const exceptions: Error[] = [];
  const locations: string[] = [];
  await TestAutomationController.iterate(async (location) => {
    locations.push(location);
  });
  await test_direct_factory_matrix(locations);

  const connector = new WorkerConnector(null, null, "process");
  try {
    await connector.connect(`${TestGlobal.ROOT}/src/servant/index.ts`);
    const servant = connector.getDriver<TestServant>();
    for (const location of locations)
      try {
        exceptions.push(
          ...(await servant.execute({
            location,
            include,
            exclude: [...exclude, "test_native_identity_"],
          })),
        );
      } catch (error) {
        exceptions.push(error as Error);
      }
  } catch (error) {
    exceptions.push(error as Error);
  } finally {
    try {
      await connector.close();
    } catch (error) {
      exceptions.push(error as Error);
    }
  }
  exceptions.push(...(await runNativeProfiles({ include, exclude })));
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
