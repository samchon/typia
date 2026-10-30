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
 * 2. Parse the emitted target syntax and execute positive, negative and boundary
 *    controls.
 * 3. Count constructors in an isolated process, simulate early CJS use and execute
 *    an ESM cycle.
 *
 * @evidence contracts/testing.md#behavioral-verification The installed compiler emits both module forms; the fixture requires one RegExp construction across repeated direct, factory, JSDoc, array, dynamic-key, whole-template, union, placeholder and backtracking checks. Invalid patterns stay lazy and custom validation code retains its behavior in ordinary strings and templates.
 * @evidence contracts/testing.md#independent-expectations Acorn parses the actual emitted bytes under the requested ECMAScript grammar independently of typia's emitter, so modern Node cannot conceal a failed downlevel transform. Authored SKU, length and escaping cases determine verdicts. Flag-free RegExp tests are stateless; invalid sources must throw only at the original check and must not initialize a cache on failure.
 * @evidence contracts/testing.md#distinguishing-cases CJS/ESM at ES2019 and ES2022, positive/negative direct/factory/assert/validate/JSDoc/nested checks, whole-template and placeholder unions, adjacent-placeholder backtracking, empty/escaped sources, lazy invalid syntax behind template short-circuiting, stateful custom flags, custom predicates, name collisions, early CJS calls and an actual ESM import cycle retain distinct assertions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers this E2E case in the schema suite. One compiler launch and isolated ttsx child per target execute the fixture assertions; portable string-length semantics are tested separately in test-utils unit tests.
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
      fs.copyFileSync(
        path.join(fixture, "index.ts.txt"),
        path.join(root, `index.${extension}`),
      );
    fs.copyFileSync(
      path.join(fixture, "check.cjs"),
      path.join(root, "check.cjs"),
    );
    fs.writeFileSync(
      path.join(root, "index-cycle.mts"),
      'import "./cycle-runner.mjs";\n' +
        fs.readFileSync(path.join(fixture, "index.ts.txt"), "utf8"),
    );
    fs.writeFileSync(
      path.join(root, "cycle-runner.mts"),
      'import { early } from "./index-cycle.mjs"; if (!early("ABC-1234")) throw Error("early ESM check failed");\n',
    );
    for (const target of ["es2019", "es2022"]) {
      fs.writeFileSync(
        path.join(root, "tsconfig.json"),
        JSON.stringify({
          compilerOptions: {
            target,
            lib: ["esnext", "dom"],
            module: "nodenext",
            moduleResolution: "nodenext",
            strict: true,
            skipLibCheck: true,
            outDir: "out",
          },
          files: [
            "index.cts",
            "index.mts",
            "index-cycle.mts",
            "cycle-runner.mts",
          ],
        }),
      );
      execFileSync(
        process.execPath,
        [
          path.join(launcher, "lib/launcher/ttsc.js"),
          "--emit",
          "-p",
          "tsconfig.json",
        ],
        options,
      );
      execFileSync(
        process.execPath,
        [path.join(launcher, "lib/launcher/ttsx.js"), "check.cjs", target],
        options,
      );
    }
  } finally {
    fs.rmSync(root, { recursive: true });
  }
};
