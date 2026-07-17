import { test_feature_identity_collect } from "./features/test_feature_identity_collect";
import { test_feature_identity_duplicate_export } from "./features/test_feature_identity_duplicate_export";
import { test_feature_identity_filename_mismatch } from "./features/test_feature_identity_filename_mismatch";
import { test_feature_identity_helper_file } from "./features/test_feature_identity_helper_file";
import { test_feature_identity_repository } from "./features/test_feature_identity_repository";
import { test_feature_identity_source_parse } from "./features/test_feature_identity_source_parse";
import { test_feature_identity_workspace_name } from "./features/test_feature_identity_workspace_name";

/**
 * Runs the cases through explicit imports rather than `DynamicExecutor`.
 *
 * This suite exists because `DynamicExecutor` discovery is name-driven, so it
 * must not depend on that discovery to find its own cases. A named import from
 * a named file makes the compiler enforce, for this suite, the very invariant
 * the suite checks everywhere else.
 */
const main = (): void => {
  const tests: Array<[string, () => void]> = [
    ["test_feature_identity_repository", test_feature_identity_repository],
    ["test_feature_identity_collect", test_feature_identity_collect],
    [
      "test_feature_identity_filename_mismatch",
      test_feature_identity_filename_mismatch,
    ],
    [
      "test_feature_identity_duplicate_export",
      test_feature_identity_duplicate_export,
    ],
    ["test_feature_identity_helper_file", test_feature_identity_helper_file],
    ["test_feature_identity_source_parse", test_feature_identity_source_parse],
    [
      "test_feature_identity_workspace_name",
      test_feature_identity_workspace_name,
    ],
  ];

  const exceptions: Error[] = [];
  for (const [name, test] of tests) {
    const started: number = Date.now();
    try {
      test();
      console.log(`  - ${name}: ${(Date.now() - started).toLocaleString()} ms`);
    } catch (error) {
      console.log(`  - ${name}: ${(error as Error).name}`);
      exceptions.push(error as Error);
    }
  }

  if (exceptions.length === 0) {
    console.log("Success");
  } else {
    for (const exp of exceptions) console.log(exp);
    console.log("Failed");
    process.exit(-1);
  }
};

main();
