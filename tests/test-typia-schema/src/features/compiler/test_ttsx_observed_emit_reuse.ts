import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

/**
 * Verifies checked ttsx reuse with typia, lint and an Evidence contributor.
 *
 * Native input JSON alone cannot prove that a later independent runtime launch
 * skips producers or that source-linked packages retain their original
 * identity.
 *
 * 1. Author one source-linked package and an entry using a type-only validator.
 * 2. Compare cold and warm launches using the installed compiler's process trace.
 * 3. Change types, source, configs, package metadata and external evidence input.
 * 4. Reject diagnostics and damaged storage before recovering a fresh result.
 *
 * @evidence contracts/testing.md#behavioral-verification Independent installed ttsx launches execute the transformed validator and linked dependency. Product traces distinguish recorded/reused results and identify every native check/emit plus plain emitting compilers in the authored fixture; warm reuse must start none. External workspace descriptor preparation belongs to ttsc's control plane, not the application's checked emit. Input transitions, diagnostics and corrupted documents must run fresh.
 * @evidence contracts/testing.md#independent-expectations Authored number/string Shape declarations determine positive and negative validator verdicts. An inherited setter must receive the dependency's literal field value under its assignment semantics, and original source filenames determine runtime identity; actual process-attempt events establish producer execution independently of cache-file timestamps.
 * @evidence contracts/testing.md#distinguishing-cases Cold/warm, type-only and linked-source edits, config/plugin/package/external-document edits, semantic TS2322 and lint failure/recovery, corrupt storage and bypass retain named verdicts. Adjacent validator inputs distinguish stale transformation; the dependency's class-field option makes incorrect entry-option reuse observable.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor runs this E2E case through the canonical schema workspace start command on TypeScript 7.0 and 7.1. Its child launches cross the actual installed CLI/native producer/runtime boundary; portable channel details belong to the native unit cases.
 * @evidence contracts/e2e.md#necessary-boundary Persistent reuse across launcher lifetimes, composed lint/Evidence observations and actual source-linked runtime identity require the installed process protocol rather than a fake cache or an in-process observation encoder.
 * @evidence contracts/e2e.md#shared-execution One fixture, linked package, content-keyed native artifact and stable trace/cache environment serve all transitions. The public cache-path report shares the caller's Go objects while completed runtime storage and native artifacts start cold.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Synchronous children finish before mutation. The test-owned root contains sources, private results and traces; its junction is unlinked before cleanup. A timeout or signal retains the fixture because descendant closure is unproved. The caller retains its shared Go cache. Trace identity and environment remain constant across cold/warm runs; inherited runtime protocol variables and NODE_OPTIONS preloads are cleared together for independent child discovery.
 * @evidence contracts/e2e.md#preserved-coverage This new runtime case adds cross-process admission and invalidation assertions; the companion native unit cases retain generation proof, incompleteness, noEmit and private-channel failure coverage.
 */
export const test_ttsx_observed_emit_reuse = (): void => {
  const requireFrom = createRequire(path.join(process.cwd(), "package.json"));
  const launcher = path.join(
    path.dirname(requireFrom.resolve("ttsc/package.json")),
    "lib/launcher/ttsx.js",
  );
  const paths = spawnSync(
    process.execPath,
    [path.join(path.dirname(launcher), "ttsc.js"), "cache", "paths", "--json"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
      timeout: 60_000,
    },
  );
  if (paths.error) throw paths.error;
  assert.equal(paths.status, 0, paths.stdout + paths.stderr);
  const accelerator: unknown = JSON.parse(paths.stdout).acceleratorRoots?.[0];
  assert.equal(typeof accelerator, "string");
  const root = fs.mkdtempSync(path.join(process.cwd(), ".observed-emit-"));
  const cache = path.join(root, "cache/ttsc");
  const trace = path.join(root, "trace");
  const link = path.join(root, "node_modules/@fixture/model");
  let retain = false;
  const write = (name: string, text: string): void => {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, text);
  };
  const json = (name: string, value: unknown): void =>
    write(name, JSON.stringify(value));
  const failures: Error[] = [];
  const check = (label: string, task: () => void): void => {
    try {
      task();
    } catch (error) {
      failures.push(new Error(label, { cause: error }));
    }
  };
  type Trace = {
    event: string;
    argv?: string[];
    cwd?: string;
    data?: { phase?: string; outcome?: string };
  };
  const offsets = new Map<string, number>();
  const records = (): Trace[] => {
    const events: Trace[] = [];
    for (const name of fs.readdirSync(trace)) {
      if (!name.endsWith(".jsonl")) continue;
      const lines = fs
        .readFileSync(path.join(trace, name), "utf8")
        .trim()
        .split("\n");
      const before = offsets.get(name) ?? 0;
      offsets.set(name, lines.length);
      for (const line of lines.slice(before))
        if (line) events.push(JSON.parse(line));
    }
    return events;
  };
  const env: NodeJS.ProcessEnv = { ...process.env };
  // An enclosing ttsx invocation may carry a private emitted-output manifest.
  // Its NODE_OPTIONS also carries runtime preloads whose received/given record
  // belongs to that invocation. Clear both for this fixture's independent runs.
  for (const key of Object.keys(env)) {
    const name = process.platform === "win32" ? key.toUpperCase() : key;
    if (
      name === "NODE_OPTIONS" ||
      name.startsWith("TTSC_") ||
      name.startsWith("TTSX_")
    )
      delete env[key];
  }
  env.TTSC_CACHE_DIR = cache;
  env.TTSC_E2E_TRACE = trace;
  // Completed results remain private and cold; Go compilation objects can be
  // shared with the installed toolchain without sharing application results.
  env.TTSC_GO_CACHE_DIR = accelerator as string;
  const outcome = (events: Trace[], name: string): boolean =>
    events.some(
      (event) =>
        event.data?.phase === "runtime-build-cache" &&
        event.data.outcome === name,
    );
  const producer = (event: Trace): boolean => {
    if (
      event.event !== "process-attempt" ||
      event.argv?.includes("--showConfig") ||
      event.argv?.includes("--listFilesOnly")
    )
      return false;
    if (
      event.argv?.some(
        (arg) =>
          arg === "--emit" ||
          arg === "--emit-observations-json" ||
          arg.startsWith("--emit-observations-json=") ||
          arg === "--emit-provenance-json" ||
          arg.startsWith("--emit-provenance-json=") ||
          arg === "--check-observations-json" ||
          arg.startsWith("--check-observations-json="),
      )
    )
      return true;
    // A workspace descriptor may itself need compilation outside this authored
    // application. Count plain compilers for the entry and linked model, while
    // native protocol calls above remain observable regardless of their cwd.
    if (!event.cwd || !event.argv?.includes("--listEmittedFiles")) return false;
    const relative = path.relative(root, event.cwd);
    return (
      relative !== ".." &&
      !relative.startsWith(`..${path.sep}`) &&
      !path.isAbsolute(relative)
    );
  };
  const invoke = (file: string, args: string[]) => {
    const result = spawnSync(process.execPath, [file, ...args], {
      cwd: root,
      encoding: "utf8",
      timeout: 1_200_000,
      env,
    });
    if (result.error || result.signal !== null) {
      retain = true;
      throw new Error(
        `Runtime actor closure unproved; fixture retained at ${root}`,
        { cause: result.error ?? result.signal },
      );
    }
    return result;
  };
  const run = (
    label: string,
    expected: unknown[],
    warm = false,
    success = true,
    args: string[] = [],
    diagnostic = /no-debugger/,
  ): void => {
    const result = invoke(launcher, [...args, "src/index.ts"]);
    const events = records();
    check(label, () => {
      assert.equal(result.status === 0, success, result.stdout + result.stderr);
      if (success) {
        const line = result.stdout.trim().split("\n").at(-1)!;
        assert.deepEqual(JSON.parse(line), [
          ...expected,
          path.join(root, "src/index.ts"),
        ]);
        if (warm) {
          assert.equal(
            outcome(events, "reused"),
            true,
            "no completed-result hit",
          );
          assert.equal(
            events.some(producer),
            false,
            "warm hit started a native producer",
          );
        } else {
          assert.equal(
            events.some(producer),
            true,
            "fresh build did not start a native producer",
          );
        }
      } else {
        assert.equal(
          outcome(events, "reused"),
          false,
          "failed input reused success",
        );
        assert.match(result.stdout + result.stderr, diagnostic);
      }
    });
  };
  try {
    fs.mkdirSync(trace, { recursive: true });
    json("package.json", {
      name: "observed-entry",
      private: true,
      type: "commonjs",
      dependencies: {
        typia: "*",
        "@ttsc/lint": "*",
        "@fixture/model": "file:packages/model",
      },
    });
    const config = {
      extends: "./base.json",
      compilerOptions: {
        module: "nodenext",
        moduleResolution: "nodenext",
        target: "es2022",
        types: ["node"],
        strict: true,
        skipLibCheck: true,
        outDir: "dist",
        plugins: [{ transform: "@ttsc/lint" }],
      },
      include: ["src"],
    };
    json("tsconfig.json", config);
    json("base.json", { compilerOptions: { strict: true } });
    write(
      "lint.config.ts",
      `import { evidence } from "@ttsc/evidence";
export default { plugins: { evidence }, rules: {
  "no-debugger": "error", "evidence/graph": ["error", { claims: [{
    type: "typescript", files: ["src/check.ts"], symbol: "function",
    reference: { type: "markdown", files: ["contract.md"], symbol: "h2", checklist: true }
  }] }]
} };
`,
    );
    write("contract.md", "# Contract\n\n## Value\n\nThe value is retained.\n");
    const checkedSource =
      "/** @evidence contract.md#value Returns the declared value. */\nexport function value(): number { return 1; }\n";
    write("src/check.ts", checkedSource);
    write("src/shape.ts", "export interface Shape { id: number }\n");
    write(
      "src/index.ts",
      `import typia from "typia";
import type { Shape } from "./shape";
import { value } from "@fixture/model";
const check = typia.createIs<Shape>();
console.log(JSON.stringify([check({ id: 7 }), check({ id: "7" }), value, __filename]));
`,
    );
    json("packages/model/package.json", {
      name: "@fixture/model",
      version: "1.0.0",
      type: "commonjs",
      exports: "./src/index.ts",
      dependencies: { typia: "*" },
    });
    json("packages/model/tsconfig.json", {
      compilerOptions: {
        module: "node16",
        moduleResolution: "node16",
        target: "es2022",
        useDefineForClassFields: false,
        strict: true,
        skipLibCheck: true,
      },
      include: ["src"],
    });
    // Assign semantics invoke the inherited setter. Reusing the entry's
    // ES2022 define semantics instead would silently leave observed at zero.
    const modelSource = (value: number): string => `let observed = 0;
class Base {}
Object.defineProperty(Base.prototype, "value", { set(value: number) { observed = value; } });
class Model extends Base { value = ${value}; }
new Model();
export const value = observed;
`;
    write("packages/model/src/index.ts", modelSource(7));
    fs.mkdirSync(path.dirname(link), { recursive: true });
    fs.symlinkSync(
      path.join(root, "packages/model"),
      link,
      process.platform === "win32" ? "junction" : "dir",
    );
    run("cold", [true, false, 7]);
    run("warm", [true, false, 7], true);
    write("src/shape.ts", "export interface Shape { id: string }\n");
    run("type-only invalidation", [false, true, 7]);
    write("packages/model/src/index.ts", modelSource(11));
    run("linked source invalidation", [false, true, 11]);
    write(
      "contract.md",
      "# Contract\n\n## Value\n\nThe value is retained with updated guidance.\n",
    );
    run("external evidence invalidation", [false, true, 11]);
    json("base.json", {
      compilerOptions: { strict: true, noFallthroughCasesInSwitch: true },
    });
    run("config ancestor invalidation", [false, true, 11]);
    config.compilerOptions.plugins.push({
      transform: "typia/lib/transform",
      finite: true,
    } as (typeof config.compilerOptions.plugins)[number]);
    json("tsconfig.json", config);
    run("plugin options invalidation", [false, true, 11]);
    json("packages/model/package.json", {
      name: "@fixture/model",
      version: "1.0.1",
      type: "commonjs",
      exports: "./src/index.ts",
      dependencies: { typia: "*" },
    });
    run("package invalidation", [false, true, 11]);
    write("src/check.ts", checkedSource.replace("(): number", "(): string"));
    run("semantic failure", [], false, false, [], /TS2322/);
    write("src/check.ts", checkedSource);
    run("semantic recovery", [false, true, 11], true);
    write("src/invalid.ts", "debugger; export {};\n");
    run("lint failure", [], false, false);
    fs.unlinkSync(path.join(root, "src/invalid.ts"));
    run("recovery", [false, true, 11], true);
    const documents = path.join(cache, "runtime-builds");
    const entries = fs.existsSync(documents)
      ? fs.readdirSync(documents).filter((name) => name.endsWith(".json"))
      : [];
    check("persistent documents", () => assert.ok(entries.length > 0));
    for (const name of entries)
      fs.writeFileSync(path.join(documents, name), "damaged document");
    run("damaged cache", [false, true, 11]);
    run("warm after repair", [false, true, 11], true);
    run("explicit bypass", [false, true, 11], false, true, ["--no-cache"]);
    if (failures.length)
      throw new AggregateError(failures, "observed ttsx reuse failures");
  } finally {
    if (!retain) {
      if (fs.existsSync(link)) fs.unlinkSync(link);
      fs.rmSync(root, { recursive: true });
    }
  }
};
