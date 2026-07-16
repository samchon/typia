import cp from "child_process";
import fs from "fs";
import path from "path";

interface ICommandResult {
  status: number | null;
  output: string;
}

interface IValidationLike {
  success: boolean;
  errors?: Array<{ path: string; expected: string }>;
}

const root: string = path.resolve(__dirname, "..");

const run = (cwd: string, args: string[]): ICommandResult => {
  const result: cp.SpawnSyncReturns<string> = cp.spawnSync(
    process.execPath,
    args,
    {
      cwd,
      encoding: "utf8",
      timeout: 600_000,
    },
  );
  const error: string =
    result.error instanceof Error
      ? `\n${result.error.name}: ${result.error.message}`
      : "";
  return {
    status: result.status,
    output: `${result.stdout ?? ""}\n${result.stderr ?? ""}${error}`,
  };
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const build = (project: string, stage: string): void => {
  const result: ICommandResult = run(project, [
    path.join(project, "build.cjs"),
  ]);
  if (result.status !== 0)
    throw new Error(`webpack build failed ${stage}:\n${result.output}`);
};

const validate = (project: string, input: unknown): IValidationLike => {
  const result: ICommandResult = run(project, [
    path.join(project, "dist", "bundle.js"),
    JSON.stringify(input),
  ]);
  if (result.status !== 0)
    throw new Error(`bundle execution failed:\n${result.output}`);
  const line: string | undefined = result.output
    .split(/\r?\n/)
    .find((candidate) => candidate.startsWith("{"));
  if (line === undefined)
    throw new Error(`bundle printed no validation JSON:\n${result.output}`);
  return JSON.parse(line) as IValidationLike;
};

const assertSuccess = (stage: string, result: IValidationLike): void => {
  if (result.success !== true)
    throw new Error(
      `${stage}: expected validation success, got ${JSON.stringify(result)}`,
    );
};

const assertErrorPath = (
  stage: string,
  result: IValidationLike,
  errorPath: string,
): void => {
  if (result.success !== false)
    throw new Error(
      `${stage}: expected validation failure at ${errorPath}, got success. ` +
        `The persistent cache served a stale validator instead of ` +
        `re-transforming the consumer after its type dependency changed.`,
    );
  const paths: string[] = (result.errors ?? []).map((error) => error.path);
  if (paths.includes(errorPath) === false)
    throw new Error(
      `${stage}: expected an error at ${errorPath}, got ${JSON.stringify(result)}`,
    );
};

/**
 * Rewrites a fixture source and pushes its mtime forward so webpack's
 * timestamp-based snapshot cannot mistake the new content for the old one on
 * filesystems with coarse mtime resolution.
 */
const mutate = async (file: string, content: string): Promise<void> => {
  await sleep(1_500);
  fs.writeFileSync(file, content);
  const forward: Date = new Date(Date.now() + 2_000);
  fs.utimesSync(file, forward, forward);
};

const writeFixture = (project: string): void => {
  fs.mkdirSync(path.join(project, "src"), { recursive: true });
  fs.writeFileSync(
    path.join(project, "tsconfig.json"),
    `${JSON.stringify(
      {
        compilerOptions: {
          target: "ES2022",
          module: "esnext",
          moduleResolution: "bundler",
          ignoreDeprecations: "6.0",
          esModuleInterop: true,
          strict: true,
          skipLibCheck: true,
        },
        include: ["src"],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(project, "webpack.config.js"),
    [
      `const path = require("path");`,
      `const ttsc = require("@ttsc/unplugin/webpack");`,
      ``,
      `module.exports = {`,
      `  mode: "production",`,
      `  context: __dirname,`,
      `  entry: "./src/index.ts",`,
      `  target: "node",`,
      `  cache: {`,
      `    type: "filesystem",`,
      `    cacheDirectory: path.resolve(__dirname, ".webpack-cache"),`,
      `  },`,
      `  plugins: [ttsc.default()],`,
      `  module: {`,
      `    rules: [`,
      `      {`,
      `        test: /\\.ts$/,`,
      `        loader: require.resolve("esbuild-loader"),`,
      `        options: { loader: "ts", target: "es2020" },`,
      `      },`,
      `    ],`,
      `  },`,
      `  // Keep workspace-linked packages under their node_modules ids so the`,
      `  // ttsc unplugin transforms only the fixture project, not the linked`,
      `  // typia sources.`,
      `  resolve: { extensions: [".ts", ".js"], symlinks: false },`,
      `  output: {`,
      `    path: path.resolve(__dirname, "dist"),`,
      `    filename: "bundle.js",`,
      `  },`,
      `  optimization: { minimize: false },`,
      `};`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(
    path.join(project, "build.cjs"),
    [
      `const webpack = require("webpack");`,
      ``,
      `const config = require("./webpack.config.js");`,
      `const compiler = webpack(config);`,
      `compiler.run((error, stats) => {`,
      `  if (error) {`,
      `    console.error(error.stack || String(error));`,
      `    process.exit(1);`,
      `  }`,
      `  const failed = stats.hasErrors();`,
      `  if (failed)`,
      `    console.error(stats.toString({ errors: true, colors: false }));`,
      `  // close() persists the filesystem cache; exiting earlier would leave`,
      `  // the second build without the first build's snapshot.`,
      `  compiler.close((closeError) => {`,
      `    if (closeError) {`,
      `      console.error(closeError.stack || String(closeError));`,
      `      process.exit(1);`,
      `    }`,
      `    process.exit(failed ? 1 : 0);`,
      `  });`,
      `});`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(
    path.join(project, "src", "index.ts"),
    [
      `import typia from "typia";`,
      ``,
      `import { MyType } from "./mytype";`,
      ``,
      `console.log(`,
      `  JSON.stringify(`,
      `    typia.validate<MyType>(JSON.parse(process.argv[2] ?? "{}")),`,
      `  ),`,
      `);`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(path.join(project, "src", "mytype.ts"), fixtureTypeV1);
  fs.writeFileSync(
    path.join(project, "src", "lib.custom.d.ts"),
    fixtureAmbientV1,
  );
};

const fixtureTypeV1: string = [
  `export interface MyType {`,
  `  id: string;`,
  `  ambient: CustomLabel;`,
  `}`,
  ``,
].join("\n");

const fixtureTypeV2: string = [
  `export interface MyType {`,
  `  id: string;`,
  `  age: number;`,
  `  ambient: CustomLabel;`,
  `}`,
  ``,
].join("\n");

const fixtureAmbientV1: string = [
  `declare interface CustomLabel {`,
  `  tag: string;`,
  `}`,
  ``,
].join("\n");

const fixtureAmbientV2: string = [
  `declare interface CustomLabel {`,
  `  tag: string;`,
  `  flag: boolean;`,
  `}`,
  ``,
].join("\n");

/**
 * Verifies webpack's persistent filesystem cache rebuilds typia validators when
 * only a consulted type's file changes.
 *
 * Bundlers erase type-only imports from their module graphs, so without the
 * transform envelope's `dependencies` channel (native producer ->
 * `@ttsc/unplugin` -> `addDependency` -> `fileDependencies` snapshot) a
 * persistent cache serves the stale generated validator forever while every
 * layer builds green (samchon/typia#2092, #2106). The ambient declaration step
 * also pins samchon/typia#2108: a project file named `lib.custom.d.ts` must
 * participate in invalidation instead of being dropped as a default library by
 * its basename.
 *
 * 1. Bundle a fixture where `index.ts` calls `typia.validate<MyType>()`,
 *    `mytype.ts` declares `MyType`, and the ambient `lib.custom.d.ts` declares
 *    a consumed `CustomLabel`; assert the validator accepts a valid input and
 *    rejects a broken one.
 * 2. Add a required `age` property to `MyType` and rebuild with the cache kept;
 *    assert the previously valid input now fails at `$input.age`.
 * 3. Add a required `flag` property to `CustomLabel` inside `lib.custom.d.ts` and
 *    rebuild with the cache kept; assert the previous input now fails at
 *    `$input.ambient.flag` and a fully updated input succeeds.
 */
export const test_webpack_filesystem_cache_invalidation =
  async (): Promise<void> => {
    const scratch: string = path.join(root, ".tmp");
    fs.mkdirSync(scratch, { recursive: true });
    const project: string = fs.mkdtempSync(path.join(scratch, "cache-"));
    try {
      writeFixture(project);

      // 1. cold build: the validator reflects MyType v1.
      build(project, "on the cold run");
      assertSuccess(
        "cold build with a valid input",
        validate(project, { id: "a", ambient: { tag: "t" } }),
      );
      assertErrorPath(
        "cold build with a broken input",
        validate(project, { ambient: { tag: "t" } }),
        "$input.id",
      );

      // 2. type-only change in mytype.ts; the cache is deliberately kept.
      await mutate(path.join(project, "src", "mytype.ts"), fixtureTypeV2);
      build(project, "after changing mytype.ts");
      assertErrorPath(
        "cached rebuild after adding MyType.age",
        validate(project, { id: "a", ambient: { tag: "t" } }),
        "$input.age",
      );
      assertSuccess(
        "cached rebuild with the updated input",
        validate(project, { id: "a", age: 1, ambient: { tag: "t" } }),
      );

      // 3. type-only change in the project-owned lib.custom.d.ts (#2108).
      await mutate(
        path.join(project, "src", "lib.custom.d.ts"),
        fixtureAmbientV2,
      );
      build(project, "after changing lib.custom.d.ts");
      assertErrorPath(
        "cached rebuild after adding CustomLabel.flag",
        validate(project, { id: "a", age: 1, ambient: { tag: "t" } }),
        "$input.ambient.flag",
      );
      assertSuccess(
        "cached rebuild with the fully updated input",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
        }),
      );
    } finally {
      fs.rmSync(project, { recursive: true, force: true });
    }
  };
