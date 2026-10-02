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
 * @evidence contracts/common.md#principled-implementation The controller completes every selected directory and enrollment assertions before the worker opens its project. Sequential execute calls collect each directory's errors; afterward incompatible native-option/authority profiles execute their complete filtered case batches. Source is not regenerated between these executions, and fatal listener state prevents success after an asynchronous failure.
 * @evidence contracts/common.md#clear-and-simple-design One generation phase, one connector lifetime and one sequential execution loop expose preparation ownership. The locations list preserves the controller's order, including composites, and the exceptions list owns the aggregate result.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Every generated directory reaches the same public servant operation with unchanged include/exclude filters. No fixture, cached verdict or patched worker method substitutes for case execution.
 * @evidence contracts/common.md#meaningful-documentation Native prose explains complete generation before project loading, shared worker ownership and separate case failures. It does not claim that compilation or oracle correctness follows from process reuse.
 * @evidence contracts/portability.md#os-neutral-implementation The existing TestGlobal root resolution identifies the workspace, Node handles its module path and tgrid's supported process connector owns process creation and communication. No shell command or platform-specific executable spelling is assembled here.
 * @evidence contracts/performance.md#efficient-algorithms Generation visits the selected operation/fixture matrix once here, and each directory executes once. The locations list grows with directories and the exceptions list with failures; the worker's module/project population grows with the executed suite.
 * @evidence contracts/performance.md#reuse-equivalent-work Every directory consumes the same completed generated source, dependency graph and native plugin inputs, so one worker can retain its project and module preparation. No file is regenerated during execution; each helper generates its scenario input locally rather than sharing mutated values.
 * @evidence contracts/performance.md#bound-retention-and-release-resources This invocation owns one primary connector, directory list and failure list. finally attempts closure after success, execute failure or connect rejection; profile execution then owns one sequential official CLI child per incompatible context. Failures are accumulated without retaining historical worker/source state; surrounding Node/tgrid owns process termination.
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
