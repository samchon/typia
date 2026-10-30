import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/**
 * Verifies compiled pattern validators reuse regexes without changing verdicts.
 *
 * Actual CommonJS and ESM modules expose initialization timing, generated-name
 * collisions and file-scoped reuse that a function-only test cannot observe.
 *
 * 1. Compile both module forms for ES2019 and ES2022 in one isolated consumer.
 * 2. Execute positive, negative, escaped, invalid and custom-tag controls.
 * 3. Count constructors in an isolated process and simulate early cyclic use.
 *
 * @evidence contracts/testing.md#behavioral-verification The installed compiler emits both module forms; the fixture executes generated validators and counts RegExp constructions, requiring one successful construction across repeated direct, factory, JSDoc, array and dynamic-key checks. Invalid patterns stay lazy and custom validation code retains its behavior.
 * @evidence contracts/testing.md#independent-expectations Authored SKU, length and escaping cases determine verdicts. Flag-free RegExp tests are stateless, so one reusable object suffices; invalid sources must throw only when their original check executes and must not initialize a cache on failure.
 * @evidence contracts/testing.md#distinguishing-cases CJS/ESM at ES2019 and ES2022, positive/negative values, direct/factory/assert/validate/JSDoc/nested checks, empty and escaped sources, invalid syntax, stateful custom flags, custom predicates, name collisions and invocation before module initialization retain distinct assertions in the fixture.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers this E2E case in the schema suite. Its single compiler launch and isolated ttsx child execute the fixture assertions; portable string-length semantics are tested separately in test-utils unit tests.
 * @evidence contracts/e2e.md#necessary-boundary Real emitted modules must bind the generated shared slots correctly through CJS and ESM lowering and the runtime helpers. Constructor counts and early calls detect misplaced or reset initialization that AST presence alone cannot establish.
 * @evidence contracts/e2e.md#shared-execution One fixture and the workspace's cached plugin serve both module forms. One compiler invocation per target is necessary to distinguish native nullish assignment from its downlevel form; one isolated child per emitted state owns runtime instrumentation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity A test-owned temporary directory sits beside the suite dependencies and is removed in finally. Runtime constructor instrumentation stays in the child process and its VM contexts, never the suite's globals; each module starts with independent slots and counters.
 * @evidence contracts/e2e.md#preserved-coverage This new case adds construction-count and module-lifecycle assertions. Existing Unicode length, pattern validation and schema suites continue to own their original cases.
 */
export const test_validate_pattern_reuse = (): void => {
  const root = fs.mkdtempSync(path.join(process.cwd(), ".pattern-reuse-"));
  const launcher = path.dirname(require.resolve("ttsc/package.json"));
  const options = { cwd: root, encoding: "utf8" as const, timeout: 1_200_000 };
  try {
    const fixture = path.join(process.cwd(), "fixtures/pattern-reuse");
    for (const extension of ["cts", "mts"])
      fs.copyFileSync(path.join(fixture, "index.ts.txt"), path.join(root, `index.${extension}`));
    fs.copyFileSync(path.join(fixture, "check.cjs"), path.join(root, "check.cjs"));
    for (const target of ["es2019", "es2022"]) {
    fs.writeFileSync(path.join(root, "tsconfig.json"), JSON.stringify({
      compilerOptions: {
        target, module: "nodenext", moduleResolution: "nodenext",
        strict: true, skipLibCheck: true, outDir: "out",
      },
      files: ["index.cts", "index.mts"],
    }));
    execFileSync(process.execPath, [path.join(launcher, "lib/launcher/ttsc.js"), "--emit", "-p", "tsconfig.json"], options);
    execFileSync(process.execPath, [path.join(launcher, "lib/launcher/ttsx.js"), "check.cjs"], options);
    }
  } finally {
    fs.rmSync(root, { recursive: true });
  }
};
