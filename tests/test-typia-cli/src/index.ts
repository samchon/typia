import cp from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

import { test_downlevel_internal_import } from "./test_downlevel_internal_import";

interface ICommandResult {
  status: number | null;
  output: string;
}

const root: string = path.resolve(__dirname, "..");
const scratch: string = fs.mkdtempSync(path.join(os.tmpdir(), "typia-cli-"));
// The fixture projects live in os.tmpdir(), outside the pnpm workspace, so
// ttsc's workspace-local cache resolution cannot find the repository root on
// its own; point it at the shared cache or every run pays a cold `go build`.
const ttscCache: string =
  process.env.TTSC_CACHE_DIR ??
  path.resolve(root, "..", "..", "node_modules", ".cache", "ttsc");
const typiaSource: string = path.resolve(
  root,
  "..",
  "..",
  "packages",
  "typia",
  "src",
);

process.on("exit", () => {
  fs.rmSync(scratch, { recursive: true, force: true });
});

const run = (args: string[]): ICommandResult => {
  const result: cp.SpawnSyncReturns<string> = cp.spawnSync("pnpm", args, {
    cwd: root,
    encoding: "utf8",
    env: {
      ...process.env,
      TTSC_CACHE_DIR: ttscCache,
    },
    shell: process.platform === "win32",
    timeout: 600_000,
  });
  const error: string =
    result.error instanceof Error
      ? `\n${result.error.name}: ${result.error.message}`
      : "";
  return {
    status: result.status,
    output: `${result.stdout ?? ""}\n${result.stderr ?? ""}${error}`.replace(
      /\\/g,
      "/",
    ),
  };
};

const writeJson = (file: string, value: unknown): void => {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
};

const listTypiaSourceJavascript = (
  directory: string = typiaSource,
): string[] =>
  fs.existsSync(directory)
    ? fs
        .readdirSync(directory, { withFileTypes: true })
        .flatMap((entry) => {
          const file: string = path.join(directory, entry.name);
          if (entry.isDirectory()) return listTypiaSourceJavascript(file);
          return entry.isFile() && entry.name.endsWith(".js")
            ? [path.relative(typiaSource, file).replace(/\\/g, "/")]
            : [];
        })
        .sort()
    : [];

const assertNoTypiaSourceJavascript = (stage: string): void => {
  const files: string[] = listTypiaSourceJavascript();
  if (files.length !== 0)
    throw new Error(
      [
        `Unexpected packages/typia/src JavaScript ${stage}:`,
        ...files.map((file) => `- ${file}`),
      ].join("\n"),
    );
};

const writeGenericDiagnosticProject = (project: string): void => {
  fs.mkdirSync(path.join(project, "src"), { recursive: true });
  writeTypiaPackageStub(project);
  writeJson(path.join(project, "tsconfig.json"), {
    compilerOptions: {
      target: "ES2022",
      lib: ["ES2022"],
      outDir: "bin",
      rootDir: "src",
      noEmit: false,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      strict: true,
      skipLibCheck: true,
      types: [],
      noUnusedLocals: false,
      noUnusedParameters: false,
      plugins: [{ transform: "typia/lib/transform" }],
    },
    include: ["src"],
  });
  fs.writeFileSync(
    path.join(project, "src", "generic.ts"),
    [
      `import typia from "typia";`,
      `export function generic<T>(input: T): boolean {`,
      `  return typia.is<T>(input);`,
      `}`,
      ``,
    ].join("\n"),
  );
};

const writeRecursiveDynamicCloneProject = (project: string): void => {
  fs.mkdirSync(path.join(project, "src"), { recursive: true });
  writeTypiaPackageStub(project);
  writeJson(path.join(project, "tsconfig.json"), {
    compilerOptions: {
      target: "ES2022",
      lib: ["ES2022"],
      outDir: "bin",
      rootDir: "src",
      noEmit: false,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      strict: true,
      skipLibCheck: true,
      types: [],
      noUnusedLocals: false,
      noUnusedParameters: false,
      plugins: [{ transform: "typia/lib/transform" }],
    },
    include: ["src"],
  });
  fs.writeFileSync(
    path.join(project, "src", "recursive-clone.ts"),
    [
      `import typia from "typia";`,
      ``,
      `interface RecursiveDynamicClone {`,
      `  name: string;`,
      `  next?: RecursiveDynamicClone;`,
      `  [key: \`child_\${string}\`]: RecursiveDynamicClone | string | undefined;`,
      `}`,
      ``,
      `export const clone = typia.createClone<RecursiveDynamicClone>();`,
      ``,
    ].join("\n"),
  );
};

const writeTypiaPackageStub = (project: string): void => {
  const directory: string = path.join(project, "node_modules", "typia");
  const lib: string = path.join(directory, "lib");
  fs.mkdirSync(lib, { recursive: true });
  writeJson(path.join(directory, "package.json"), {
    name: "typia",
    main: "./lib/module.js",
    types: "./lib/module.d.ts",
    exports: {
      ".": {
        types: "./lib/module.d.ts",
        default: "./lib/module.js",
      },
      "./lib/transform": "./lib/transform.js",
      "./package.json": "./package.json",
    },
    ttsc: {
      plugin: { transform: "typia/lib/transform" },
    },
  });
  fs.writeFileSync(
    path.join(lib, "module.d.ts"),
    [
      `declare namespace typia {`,
      `  type Resolved<T> = T;`,
      `  function is<T>(input: unknown): input is T;`,
      `  function createClone<T>(): (input: T) => Resolved<T>;`,
      `}`,
      `declare const typia: {`,
      `  is: typeof typia.is;`,
      `  createClone: typeof typia.createClone;`,
      `};`,
      `export default typia;`,
      `export declare type Resolved<T> = typia.Resolved<T>;`,
      `export declare function is<T>(input: unknown): input is T;`,
      `export declare function createClone<T>(): (input: T) => Resolved<T>;`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(
    path.join(lib, "module.js"),
    [
      `exports.is = () => false;`,
      `exports.createClone = () => (input) => input;`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(
    path.join(lib, "transform.js"),
    [
      `"use strict";`,
      `Object.defineProperty(exports, "__esModule", { value: true });`,
      `exports.default = createTtscPlugin;`,
      `function createTtscPlugin() {`,
      `  return {`,
      `    name: "typia",`,
      `    source: ${JSON.stringify(
        path
          .resolve(
            root,
            "..",
            "..",
            "packages",
            "typia",
            "native",
            "cmd",
            "ttsc-typia",
          )
          .replace(/\\/g, "/"),
      )},`,
      `  };`,
      `}`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(path.join(lib, "transform.d.ts"), `export {};\n`);
};

/**
 * Verifies the CLI preserves generic transform diagnostic details.
 *
 * Locks the ttsc boundary for #1973. The native command may reject a typia call
 * before emitting JavaScript, but the caller must still see the typia
 * diagnostic code, source file, and non-specified generic argument cause
 * instead of a Go panic or a collapsed empty failure.
 *
 * 1. Create a temporary project with a minimal typia package stub.
 * 2. Compile a generic typia.is<T>() call through pnpm exec ttsc.
 * 3. Assert the command fails with the structured transform diagnostic.
 */
const testGenericTransformDiagnostic = (): void => {
  const project: string = fs.mkdtempSync(
    path.join(scratch, "generic-diagnostic-"),
  );
  writeGenericDiagnosticProject(project);

  assertNoTypiaSourceJavascript("before CLI compilation");
  const result: ICommandResult = run([
    "exec",
    "ttsc",
    "--emit",
    "--cwd",
    project,
    "-p",
    "tsconfig.json",
  ]);
  assertNoTypiaSourceJavascript("after CLI compilation");
  if (result.status === 0)
    throw new Error("Generic transform diagnostic unexpectedly succeeded.");
  if (result.output.includes("non-specified generic argument") === false)
    throw new Error(
      `Generic transform diagnostic lost its cause:\n${result.output}`,
    );
  if (result.output.includes("error TS(typia.is):") === false)
    throw new Error(
      `Generic transform diagnostic lost its typia code:\n${result.output}`,
    );
  if (result.output.includes("src/generic.ts") === false)
    throw new Error(
      `Generic transform diagnostic lost its source file:\n${result.output}`,
    );
  if (
    /Cannot find module ["']typia["']|Cannot find type definition file/.test(
      result.output,
    )
  )
    throw new Error(
      `Generic transform diagnostic mixed in resolution noise:\n${result.output}`,
    );
  if (/panic:|SIGSEGV|runtime error/i.test(result.output))
    throw new Error(
      `Generic transform diagnostic regressed to a panic:\n${result.output}`,
    );
};

/**
 * Verifies recursive dynamic clone emit does not feed blocks to the Go printer.
 *
 * Recursive clone/classify guards evaluate the object joiner body as an
 * expression while registering the output in a WeakMap. Dynamic object keys
 * make the clone joiner return a statement block; the native transform must
 * wrap that block in an IIFE before passing it to Object.assign, otherwise
 * TypeScript-Go panics with "unexpected Expression: KindBlock" during emit.
 */
const testRecursiveDynamicCloneEmit = (): void => {
  const project: string = fs.mkdtempSync(
    path.join(scratch, "recursive-dynamic-clone-"),
  );
  writeRecursiveDynamicCloneProject(project);

  assertNoTypiaSourceJavascript("before recursive dynamic clone compilation");
  const result: ICommandResult = run([
    "exec",
    "ttsc",
    "--emit",
    "--cwd",
    project,
    "-p",
    "tsconfig.json",
  ]);
  assertNoTypiaSourceJavascript("after recursive dynamic clone compilation");
  if (result.status !== 0)
    throw new Error(
      `Recursive dynamic clone emit unexpectedly failed:\n${result.output}`,
    );
  if (
    /unexpected Expression: KindBlock|panic:|SIGSEGV|runtime error/i.test(
      result.output,
    )
  )
    throw new Error(
      `Recursive dynamic clone emit regressed to a printer panic:\n${result.output}`,
    );
  if (fs.existsSync(path.join(project, "bin", "recursive-clone.js")) === false)
    throw new Error("Recursive dynamic clone emit did not write JavaScript.");
};

const main = (): void => {
  testGenericTransformDiagnostic();
  testRecursiveDynamicCloneEmit();
  test_downlevel_internal_import();
  console.log("Success");
};
main();
