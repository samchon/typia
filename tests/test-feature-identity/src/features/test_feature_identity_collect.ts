import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/oracle/equality";
import cp from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies the collector sees exactly the files the suites would run.
 *
 * The repository scan is only as trustworthy as what reaches it, and every way
 * this step can go wrong is silent: a path `git ls-files` quotes never matches
 * the pattern and vanishes from the check, a declaration file invents a
 * diagnostic no one can act on, and an unstaged deletion crashes the run
 * outright. The live tree cannot pin any of that — it holds no such file — so
 * this builds a throwaway repository that does.
 *
 * A suite's plugin-free unit cases live under `src/unit/features` beside its
 * `src/features` population; both must reach the check, while the unit
 * registration index and declarations stay outside it.
 *
 * 1. Stage a feature tree holding an ordinary test, a non-ASCII-named test, a
 *    helper, a declaration file, a file outside `features`, a unit-feature test
 *    with its unit index, and a staged file deleted from the working tree.
 * 2. Assert the collector returns the real feature sources of both populations and
 *    nothing else.
 * 3. Assert the non-ASCII file is parsed and its mismatch reported, so the quoting
 *    path stays wired end to end.
 */
export const test_feature_identity_collect = (): void => {
  const root: string = fs.mkdtempSync(path.join(os.tmpdir(), "typia-fid-"));
  try {
    // 1. A TREE WITH EVERY AWKWARD SHAPE
    git(["init", "-q", "."], root);
    write(
      root,
      "tests/test-alpha/src/features/test_alpha_ordinary.ts",
      "export const test_alpha_ordinary = (): void => {};",
    );
    write(root, "tests/test-alpha/src/features/test_alpha_é.ts");
    write(
      root,
      "tests/test-alpha/src/features/Helper.ts",
      "export const helper = 1;",
    );
    write(root, "tests/test-alpha/src/features/typings.d.ts");
    write(root, "tests/test-alpha/src/index.ts");
    write(
      root,
      "tests/test-alpha/src/unit/features/test_alpha_unit.ts",
      "export const test_alpha_unit = (): void => {};",
    );
    write(root, "tests/test-alpha/src/unit/index.ts");
    write(root, "tests/test-alpha/src/unit/features/typings.d.ts");
    write(root, "tests/test-alpha/src/features/test_alpha_removed.ts");
    git(["add", "-A"], root);
    fs.rmSync(`${root}/tests/test-alpha/src/features/test_alpha_removed.ts`);

    const files: FeatureIdentity.IFeatureFile[] = FeatureIdentity.collect(root);

    // 2. EXACTLY THE RUNNABLE SOURCES
    TestEquality.equals(
      "collected",
      [
        "tests/test-alpha/src/features/Helper.ts",
        "tests/test-alpha/src/features/test_alpha_ordinary.ts",
        "tests/test-alpha/src/features/test_alpha_é.ts",
        "tests/test-alpha/src/unit/features/test_alpha_unit.ts",
      ],
      files.map((file) => file.path).sort(),
    );
    TestEquality.equals(
      "suite",
      ["test-alpha"],
      [...new Set(files.map((file) => file.suite))],
    );

    // 3. THE NON-ASCII FILE IS REALLY READ, NOT MERELY LISTED
    const unicode: FeatureIdentity.IFeatureFile = files.find(
      (file) => file.basename === "test_alpha_é",
    )!;
    TestEquality.equals(
      "unicode exports",
      ["test_alpha_stub"],
      unicode.exports,
    );

    // Only the unicode file misnames its export, so it is the lone
    // diagnostic. Asserting the exact count keeps the other shapes
    // proven silent rather than merely unmentioned.
    const diagnostics: string[] = FeatureIdentity.diagnose(files);
    TestEquality.equals("diagnostics", 1, diagnostics.length);
    TestValidator.predicate(
      `unicode mismatch reported: ${diagnostics[0]}`,
      diagnostics[0]!.includes("test_alpha_é.ts"),
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
};

/**
 * Runs git against the fixture with its output captured.
 *
 * The fixture is a scratch repository, so git's line-ending advice about it
 * says nothing about this suite; inheriting stderr would only interleave it
 * with the case results.
 */
const git = (args: string[], cwd: string): void => {
  cp.execFileSync("git", args, { cwd, stdio: ["ignore", "pipe", "pipe"] });
};

/**
 * Writes `code` to `relative`, defaulting to a body whose exported name never
 * matches the file, so a file that must be ignored cannot pass by coincidence.
 */
const write = (
  root: string,
  relative: string,
  code: string = "export const test_alpha_stub = (): void => {};",
): void => {
  const absolute: string = path.resolve(root, relative);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, `${code}\n`, "utf8");
};
