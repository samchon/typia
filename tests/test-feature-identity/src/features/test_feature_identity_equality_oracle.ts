import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import fs from "fs";
import path from "path";

import { Git } from "../Git";

/**
 * Verifies no tracked test source asserts through `TestValidator.equals`.
 *
 * `@nestia/e2e`'s `TestValidator.equals` walks only its first argument's keys
 * and sees no content in `Date`, `Map`, or `Set`, so an assertion that put the
 * actual first passed whatever the actual lost. #2350 triaged the call sites
 * one by one and the trap still returned in #2399; the suites now assert
 * through `TestEquality` instead (#2401). A single new call would reopen the
 * trap silently, because it still passes, so only a scan can catch it.
 *
 * 1. Assert the matcher finds each planted spelling of the call, so the scan
 *    cannot pass by matching nothing.
 * 2. Assert it ignores prose that only names the function.
 * 3. Collect every tracked TypeScript source under `tests/`, and assert the scan
 *    reached them.
 * 4. Assert none of them calls `TestValidator.equals`.
 */
export const test_feature_identity_equality_oracle = (): void => {
  // assembled at run time, so this file does not match its own scan
  const V: string = ["Test", "Validator"].join("");
  for (const planted of [
    `${V}.equals("title", x, y);`,
    `${V}.equals<IMember>("title", x, y);`,
    `${V}\n  .equals("title")(x)(y);`,
    `${V}["equals"]("title", x, y);`,
    `const { equals } = ${V};`,
  ])
    TestEquality.equals(
      `planted ${JSON.stringify(planted)}`,
      calls(planted),
      [1],
    );
  TestEquality.equals(
    "prose",
    calls("// `TestValidator.equals` walked only its first argument's keys."),
    [],
  );

  const root: string = Git.toplevel();
  const files: string[] = Git.run(["ls-files", "-z", "--", "tests"], root)
    .split("\0")
    .filter((file) => /^tests\/[^/]+\/src\/.+\.ts$/.test(file))
    // the index can still list a file the working tree deleted, which runs
    // nowhere, as `FeatureIdentity.collect` reasons
    .filter((file) => fs.existsSync(path.join(root, file)));
  TestValidator.predicate(
    `collected test sources (${files.length})`,
    files.length >= POPULATED,
  );
  TestEquality.equals(
    "TestValidator.equals calls",
    [] as string[],
    files.flatMap((file) =>
      calls(fs.readFileSync(path.join(root, file), "utf8")).map(
        (line) => `${file}:${line}`,
      ),
    ),
  );
};

/** One-based lines where `text` calls or extracts `TestValidator.equals`. */
const calls = (text: string): number[] => {
  const output: number[] = [];
  for (const match of text.matchAll(PATTERN))
    output.push(text.slice(0, match.index).split("\n").length);
  return output;
};

const PATTERN =
  /TestValidator\s*(?:\.\s*equals\s*[<(]|\[\s*["'`]equals["'`]\s*\])|\{[^}]*\bequals\b[^}]*\}\s*=\s*TestValidator\b/g;

/**
 * A floor, not an expectation: the tracked suites hold thousands of sources, so
 * anything less means the scan stopped finding them.
 */
const POPULATED = 1000;
