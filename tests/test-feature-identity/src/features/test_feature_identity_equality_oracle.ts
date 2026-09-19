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
    `${V}?.equals("title", x, y);`,
    `(${V} as any).equals("title", x, y);`,
    `const eq = ${V}.equals;`,
    `${V}.equals.call(null, "title", x, y);`,
    `${V}["equals"]("title", x, y);`,
    `const { equals } = ${V};`,
    `import { ${V} as V } from "@nestia/e2e";`,
  ])
    TestEquality.equals(
      `planted ${JSON.stringify(planted)}`,
      calls(planted),
      [1],
    );
  for (const prose of [
    `// \`${V}.equals\` walked only its first argument's keys.`,
    `/** \`${V}.equals(x, y)\` once passed a dropped key. */`,
    `/*\n * ${V}.equals(\n */`,
    `${V}.predicate("equals", true);`,
    `${V}.equalsLike("title", x, y);`,
  ])
    TestEquality.equals(`prose ${JSON.stringify(prose)}`, calls(prose), []);

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
    "one-way equality calls",
    [] as string[],
    files.flatMap((file) =>
      calls(fs.readFileSync(path.join(root, file), "utf8")).map(
        (line) => `${file}:${line}`,
      ),
    ),
  );
};

/**
 * One-based lines where `text` reaches `TestValidator.equals`.
 *
 * Comments are blanked first, keeping their line breaks, so prose that names
 * the function is not a use while any code spelling of it is.
 */
const calls = (text: string): number[] => {
  const code: string = text.replace(COMMENT, (comment) =>
    comment.replace(/[^\n]/g, " "),
  );
  const output: number[] = [];
  for (const match of code.matchAll(PATTERN))
    output.push(code.slice(0, match.index).split("\n").length);
  return output;
};

const COMMENT = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;

/**
 * Any member access to `equals` on `TestValidator`, through a cast or optional
 * chaining included, a destructuring of it, or a renaming import that would
 * hide the name from the rest of the pattern.
 */
const PATTERN =
  /\bTestValidator\b(?:\s*\)|\s+as\s+[\w.<>]+)*\s*(?:\??\.\s*equals\b|(?:\?\.)?\s*\[\s*["'`]equals["'`]\s*\])|\{[^}]*\bequals\b[^}]*\}\s*=\s*\(?\s*TestValidator\b|\bimport\s*(?:type\s*)?\{[^}]*\bTestValidator\s+as\b/g;

/**
 * A floor, not an expectation: the tracked suites hold thousands of sources, so
 * anything less means the scan stopped finding them.
 */
const POPULATED = 500;
