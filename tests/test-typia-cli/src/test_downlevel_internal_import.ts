import cp from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

interface ICommandResult {
  status: number | null;
  output: string;
}

const root: string = path.resolve(__dirname, "..");
const ttscCache: string =
  process.env.TTSC_CACHE_DIR ??
  path.resolve(root, "..", "..", "node_modules", ".cache", "ttsc");

const run = (args: string[], cwd: string = root): ICommandResult => {
  const result: cp.SpawnSyncReturns<string> = cp.spawnSync(
    args[0]!,
    args.slice(1),
    {
      cwd,
      encoding: "utf8",
      env: {
        ...process.env,
        TTSC_CACHE_DIR: ttscCache,
      },
      shell: process.platform === "win32" && args[0] === "pnpm",
      timeout: 600_000,
    },
  );
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

const writeProject = (project: string): void => {
  const source: string = path.join(project, "src");
  const typia: string = path.join(project, "node_modules", "typia");
  const lib: string = path.join(typia, "lib");
  const internal: string = path.join(lib, "internal");
  fs.mkdirSync(source, { recursive: true });
  fs.mkdirSync(internal, { recursive: true });

  writeJson(path.join(project, "tsconfig.json"), {
    compilerOptions: {
      target: "ES2015",
      lib: ["ES2015"],
      outDir: "bin",
      rootDir: "src",
      noEmit: false,
      esModuleInterop: true,
      module: "nodenext",
      moduleResolution: "nodenext",
      strict: true,
      skipLibCheck: true,
      types: [],
      plugins: [{ transform: "typia/lib/transform" }],
    },
    include: ["src"],
  });
  writeJson(path.join(typia, "package.json"), {
    name: "typia",
    main: "./lib/module.js",
    types: "./lib/module.d.ts",
    exports: {
      ".": {
        types: "./lib/module.d.ts",
        default: "./lib/module.js",
      },
      "./lib/internal/*": "./lib/internal/*.js",
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
      `  interface IRandomGenerator {`,
      `    number(schema: unknown): number;`,
      `  }`,
      `  type Resolved<T> = T;`,
      `  function random<T>(generator?: Partial<IRandomGenerator>): Resolved<T>;`,
      `}`,
      `declare const typia: { random: typeof typia.random };`,
      `export default typia;`,
      `export declare function random<T>(`,
      `  generator?: Partial<typia.IRandomGenerator>,`,
      `): typia.Resolved<T>;`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(
    path.join(lib, "module.js"),
    `exports.random = () => { throw new Error("typia.random was not transformed"); };\n`,
  );
  fs.writeFileSync(
    path.join(internal, "_randomNumber.js"),
    `exports._randomNumber = () => 42;\n`,
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
  fs.writeFileSync(
    path.join(source, "random.ts"),
    [
      `import typia from "typia";`,
      `interface Sample { value: number; }`,
      `const data = typia.random<Sample>();`,
      `if (typeof data.value !== "number") throw new Error("invalid random value");`,
      `export { data };`,
      ``,
    ].join("\n"),
  );
};

/**
 * Verifies downlevel transforms keep internal import aliases unshadowed.
 *
 * ES2015-ES2019 lowering introduces function-scoped temporary variables for
 * optional chaining and nullish coalescing. Internal helper imports must use
 * unique names rather than the same temporary-name channel, or a generated
 * random function reads the local undefined temporary instead of its import.
 *
 * 1. Create a minimal typia project targeting ES2015 with a random number helper.
 * 2. Compile a typia.random call through the native ttsc plugin.
 * 3. Assert the helper import is not temp-named and execute the emitted module.
 */
export const test_downlevel_internal_import = (): void => {
  const project: string = fs.mkdtempSync(
    path.join(os.tmpdir(), "typia-downlevel-import-"),
  );
  try {
    writeProject(project);
    const compilation: ICommandResult = run([
      "pnpm",
      "exec",
      "ttsc",
      "--emit",
      "--cwd",
      project,
      "-p",
      "tsconfig.json",
    ]);
    if (compilation.status !== 0)
      throw new Error(
        `Downlevel internal import compilation failed:\n${compilation.output}`,
      );

    const output: string = fs.readFileSync(
      path.join(project, "bin", "random.js"),
      "utf8",
    );
    const binding: RegExpMatchArray | null = output.match(
      /const\s+([A-Za-z_$][\w$]*)\s*=.*require\(["']typia\/lib\/internal\/_randomNumber["']\)/,
    );
    if (binding === null)
      throw new Error(`Random helper import was not emitted:\n${output}`);
    if (/^_[a-z]$/.test(binding[1]!))
      throw new Error(
        `Random helper import used a temporary-style alias ${binding[1]}:\n${output}`,
      );

    const execution: ICommandResult = run(
      [process.execPath, path.join(project, "bin", "random.js")],
      project,
    );
    if (execution.status !== 0)
      throw new Error(
        `Downlevel random execution failed:\n${execution.output}`,
      );
  } finally {
    fs.rmSync(project, { recursive: true, force: true });
  }
};
