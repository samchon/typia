import { TestValidator } from "@nestia/e2e";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies every committed feature test file is named after the test it
 * exports.
 *
 * This is the backstop for the whole class. `DynamicExecutor` keys its
 * `--include` / `--exclude` filter and its report entries on the **exported**
 * function name, so a file whose export disagrees with its basename cannot be
 * selected by its own name, and a name exported twice inside one suite makes
 * two executions indistinguishable in any name-keyed report. Both mistakes are
 * invisible today because every test body still runs; only this scan fails.
 *
 * 1. Collect every committed `tests/<suite>/src/features` source file.
 * 2. Assert the scan actually reached the trees, so a broken collector cannot
 *    pass vacuously.
 * 3. Assert the tree yields no identity or uniqueness diagnostic.
 */
export const test_feature_identity_repository = (): void => {
  const files: FeatureIdentity.IFeatureFile[] = FeatureIdentity.collect();
  TestValidator.predicate(
    `collected feature files (${files.length})`,
    files.length >= POPULATED,
  );
  TestValidator.equals(
    "diagnostics",
    [] as string[],
    FeatureIdentity.diagnose(files),
  );
};

/**
 * A floor, not an expectation: the committed trees hold hundreds of files, so
 * anything less means the collector stopped finding them rather than that the
 * repository shrank.
 */
const POPULATED = 100;
