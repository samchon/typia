import { TestProcessFailure } from "@typia/template";

import { test_direct_factory_matrix } from "./test_direct_factory_matrix";
import { test_process_fatal_events } from "./test_process_fatal_events";
import { test_resolved_equal_to_async_oracle } from "./test_resolved_equal_to_async_oracle";
import { test_resolved_equal_to_oracle } from "./test_resolved_equal_to_oracle";

/**
 * Runs the harness regressions that guard the generated matrix itself.
 *
 * These cases cannot live under `src/features`, which the controller deletes and
 * regenerates on every run, and they are not typia feature tests: they assert
 * that the harness generates what it claims and that its oracles can fail. The
 * suite's `prestart` runs them, so a broken harness stops the run before four
 * thousand generated cases report against it.
 */
async function main(): Promise<void> {
  await test_process_fatal_events();
  await test_direct_factory_matrix();
  await test_resolved_equal_to_oracle();
  await test_resolved_equal_to_async_oracle();

  if (failure.failed() === true) {
    console.log("Failed");
    process.exit(-1);
  }
  console.log("Success");
}

const failure: TestProcessFailure.IListener = TestProcessFailure.listen();
main().catch((error) => {
  console.log("critical error", error);
  process.exit(-1);
});
