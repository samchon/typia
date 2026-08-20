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

interface IModuleRow {
  name: string;
  built: boolean;
  codeGenerated: boolean;
}

const build = (project: string, stage: string): IModuleRow[] => {
  const result: ICommandResult = run(project, [
    path.join(project, "build.cjs"),
  ]);
  if (result.status !== 0)
    throw new Error(`webpack build failed ${stage}:\n${result.output}`);
  const line: string | undefined = result.output
    .split(/\r?\n/)
    .find((candidate) => candidate.startsWith("MODULES "));
  if (line === undefined)
    throw new Error(
      `webpack build reported no modules ${stage}:\n${result.output}`,
    );
  return JSON.parse(line.slice("MODULES ".length)) as IModuleRow[];
};

/**
 * Whether webpack rebuilt the entry module on this run.
 *
 * `built`, not `codeGenerated`: webpack skips code generation when the module
 * hash is unchanged, and a watched input changing outside the entry's own
 * source leaves that hash alone. Re-running the loader is what the narrowing
 * step observes, and only `built` reports it.
 */
const regenerated = (rows: IModuleRow[], stage: string): boolean => {
  const entry: IModuleRow | undefined = rows.find(
    (row) => row.name === "./src/index.ts",
  );
  if (entry === undefined)
    throw new Error(
      `${stage}: webpack reported no ./src/index.ts module, only ` +
        JSON.stringify(rows.map((row) => row.name)),
    );
  return entry.built;
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
      `  // Concatenation would fold the entry and everything it inlines into`,
      `  // one stats row, and the narrowing step below has to tell "the entry`,
      `  // re-ran the transform" from "a sibling module rebuilt".`,
      `  optimization: { minimize: false, concatenateModules: false },`,
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
      `  // Which modules this run regenerated. A step that asserts the cached`,
      `  // validator was REUSED has no other observable: the validator behaves`,
      `  // identically either way, so only the rebuild separates the narrowed`,
      `  // derivation from the reference-closure one.`,
      `  const json = stats.toJson({ all: false, modules: true, cachedModules: true });`,
      `  console.log(`,
      `    "MODULES " +`,
      `      JSON.stringify(`,
      `        (json.modules || []).map((m) => ({`,
      `          name: String(m.name || ""),`,
      `          built: m.built === true,`,
      `          codeGenerated: m.codeGenerated === true,`,
      `        })),`,
      `      ),`,
      `  );`,
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
      `import { HELPER } from "./helper";`,
      `import { MyType } from "./mytype";`,
      ``,
      `if (HELPER === "never") console.log(HELPER);`,
      `console.log(`,
      `  JSON.stringify(`,
      `    typia.validate<MyType>(JSON.parse(process.argv[2] ?? "{}")),`,
      `  ),`,
      `);`,
      ``,
    ].join("\n"),
  );
  fs.writeFileSync(path.join(project, "src", "helper.ts"), fixtureHelperV1);
  fs.writeFileSync(path.join(project, "src", "mytype.ts"), fixtureTypeV1);
  fs.writeFileSync(
    path.join(project, "src", "lib.custom.d.ts"),
    fixtureAmbientV1,
  );
  fs.writeFileSync(path.join(project, "src", "barrel.ts"), fixtureBarrelV1);
  fs.writeFileSync(path.join(project, "src", "nested.ts"), fixtureNested);
  fs.writeFileSync(path.join(project, "src", "alt.ts"), fixtureAlt);
  fs.writeFileSync(path.join(project, "src", "dynamic.ts"), fixtureDynamic);
  fs.writeFileSync(path.join(project, "src", "cell.ts"), fixtureCellV1);
};

const fixtureTypeV1: string = [
  `import { Nested } from "./barrel";`,
  `import { Dynamic } from "./dynamic";`,
  ``,
  `export interface MyType {`,
  `  id: string;`,
  `  ambient: CustomLabel;`,
  `  nested: Nested;`,
  `  dynamic: Dynamic;`,
  `}`,
  ``,
].join("\n");

const fixtureTypeV2: string = [
  `import { Nested } from "./barrel";`,
  `import { Dynamic } from "./dynamic";`,
  ``,
  `export interface MyType {`,
  `  id: string;`,
  `  age: number;`,
  `  ambient: CustomLabel;`,
  `  nested: Nested;`,
  `  dynamic: Dynamic;`,
  `}`,
  ``,
].join("\n");

// The barrel holds no declaration: it only SELECTS which module `Nested`
// resolves to, so re-pointing it must invalidate the consumer (#2126).
const fixtureBarrelV1: string = [`export { Nested } from "./nested";`, ``].join(
  "\n",
);

const fixtureBarrelV2: string = [`export { Nested } from "./alt";`, ``].join(
  "\n",
);

const fixtureNested: string = [
  `export interface Nested {`,
  `  code: string;`,
  `}`,
  ``,
].join("\n");

const fixtureAlt: string = [
  `export interface Nested {`,
  `  code: string;`,
  `  extra: boolean;`,
  `}`,
  ``,
].join("\n");

// `Cell` is reached only through the index signature, which carries no property
// symbol for the member walk to register (#2126).
const fixtureDynamic: string = [
  `import { Cell } from "./cell";`,
  ``,
  `export interface Dynamic {`,
  `  [key: string]: Cell;`,
  `}`,
  ``,
].join("\n");

const fixtureCellV1: string = [`export type Cell = string;`, ``].join("\n");

const fixtureCellV2: string = [`export type Cell = number;`, ``].join("\n");

// `index.ts` imports this for its VALUE, so the reference graph carries the
// edge, and no typia call consults it, so the reported dependencies do not name
// it. That is the one shape that sits in `reach(edges, index.ts)` and outside
// `dependencies[index.ts]` — a type-only import would sit in neither, because
// `graph.edges` records emitted module edges and TypeScript elides that import
// (samchon/typia#2362).
const fixtureHelperV1: string = [`export const HELPER = "v1";`, ``].join("\n");

const fixtureHelperV2: string = [`export const HELPER = "v2";`, ``].join("\n");

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
 * Step 6 pins the completeness declaration itself. `index.ts` imports
 * `helper.ts` for its VALUE, so the reference graph carries the edge, and no
 * typia call consults it, so the reported list leaves it out -- the one input
 * that sits in `reach(graph.edges, index.ts)` and outside
 * `dependencies[index.ts]`. Under the default derivation the entry watches it
 * and the rebuild re-runs the transform; declared complete, the entry watches
 * only its reported list and the cached validator is reused. A type-only import
 * cannot serve here: `graph.edges` records emitted module edges, so an elided
 * import lands in neither set.
 *
 * The barrel and index-signature steps pin samchon/typia#2126. Both files are
 * intermediates that hold no declaration of their own but SELECT which one the
 * analysis reaches, and both were omitted from the reported dependencies while
 * demonstrably changing the generated validator — the defect survived #2100 and
 * #2109 precisely because no end-to-end pin covered these two shapes.
 *
 * 1. Bundle a fixture where `index.ts` calls `typia.validate<MyType>()`,
 *    `mytype.ts` declares `MyType`, the ambient `lib.custom.d.ts` declares a
 *    consumed `CustomLabel`, `barrel.ts` re-exports `Nested` from `nested.ts`,
 *    and `dynamic.ts` reaches `Cell` (`cell.ts`) through an index signature;
 *    assert the validator accepts a valid input and rejects a broken one.
 * 2. Add a required `age` property to `MyType` and rebuild with the cache kept;
 *    assert the previously valid input now fails at `$input.age`.
 * 3. Add a required `flag` property to `CustomLabel` inside `lib.custom.d.ts` and
 *    rebuild with the cache kept; assert the previous input now fails at
 *    `$input.ambient.flag` and a fully updated input succeeds.
 * 4. Re-point `barrel.ts` at `alt.ts`, whose `Nested` adds a required `extra`, and
 *    rebuild with the cache kept; assert the previous input now fails at
 *    `$input.nested.extra`.
 * 5. Retype `Cell` from `string` to `number` in `cell.ts` and rebuild with the
 *    cache kept; assert the previous string-valued dynamic entry now fails and
 *    a numeric one succeeds.
 * 6. Change `helper.ts` and assert the entry was NOT rebuilt. Steps 2-5 all mutate
 *    a file the reported list already names, so they pass under either
 *    derivation; this one is the only step that can tell them apart
 *    (samchon/typia#2362).
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
        validate(project, {
          id: "a",
          ambient: { tag: "t" },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
      );
      assertErrorPath(
        "cold build with a broken input",
        validate(project, {
          ambient: { tag: "t" },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
        "$input.id",
      );

      // 2. type-only change in mytype.ts; the cache is deliberately kept.
      await mutate(path.join(project, "src", "mytype.ts"), fixtureTypeV2);
      const consulted: IModuleRow[] = build(
        project,
        "after changing mytype.ts",
      );
      // The positive twin of step 6: a consulted file must regenerate the
      // entry. Without it, step 6's negative would also pass on a build that
      // regenerates nothing at all.
      if (regenerated(consulted, "after changing mytype.ts") === false)
        throw new Error(
          "cached rebuild after adding MyType.age: the entry was not " +
            "regenerated, so this suite can no longer observe a rebuild and " +
            "step 6 proves nothing.",
        );
      assertErrorPath(
        "cached rebuild after adding MyType.age",
        validate(project, {
          id: "a",
          ambient: { tag: "t" },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
        "$input.age",
      );
      assertSuccess(
        "cached rebuild with the updated input",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t" },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
      );

      // 3. type-only change in the project-owned lib.custom.d.ts (#2108).
      await mutate(
        path.join(project, "src", "lib.custom.d.ts"),
        fixtureAmbientV2,
      );
      build(project, "after changing lib.custom.d.ts");
      assertErrorPath(
        "cached rebuild after adding CustomLabel.flag",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t" },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
        "$input.ambient.flag",
      );
      assertSuccess(
        "cached rebuild with the fully updated input",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
      );

      // 4. re-point the barrel at a different module (#2126). Only barrel.ts
      // changes; it declares nothing, so an envelope without the barrel edge
      // leaves the cache serving the old Nested validator.
      await mutate(path.join(project, "src", "barrel.ts"), fixtureBarrelV2);
      build(project, "after re-pointing barrel.ts");
      assertErrorPath(
        "cached rebuild after re-pointing the barrel at alt.ts",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
          nested: { code: "c" },
          dynamic: { k: "v" },
        }),
        "$input.nested.extra",
      );
      assertSuccess(
        "cached rebuild with the re-pointed input",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
          nested: { code: "c", extra: true },
          dynamic: { k: "v" },
        }),
      );

      // 5. retype the index signature's value alias (#2126). `cell.ts` is
      // reached only through `Dynamic`'s index signature, which carries no
      // property symbol for the member walk to register.
      await mutate(path.join(project, "src", "cell.ts"), fixtureCellV2);
      build(project, "after retyping cell.ts");
      assertErrorPath(
        "cached rebuild after retyping the index-signature value alias",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
          nested: { code: "c", extra: true },
          dynamic: { k: "v" },
        }),
        "$input.dynamic.k",
      );
      assertSuccess(
        "cached rebuild with the retyped input",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
          nested: { code: "c", extra: true },
          dynamic: { k: 1 },
        }),
      );

      // 6. the step that can only pass UNDER narrowing (samchon/typia#2362).
      // Every step above mutates a file the reported list already names, so all
      // of them pass under either derivation. `helper.ts` is the one input that
      // separates them: `index.ts` imports it for its value, so the reference
      // graph carries the edge, and no typia call consults it, so the reported
      // list leaves it out. Un-narrowed the entry watches `reach(edges,
      // index.ts)` and this rebuild regenerates it; narrowed it watches
      // `dependencies[index.ts]` and the cached validator is reused.
      await mutate(path.join(project, "src", "helper.ts"), fixtureHelperV2);
      const narrowed: IModuleRow[] = build(project, "after changing helper.ts");
      if (regenerated(narrowed, "after changing helper.ts") === true)
        throw new Error(
          "cached rebuild after changing a reachable but unconsulted file: " +
            "the entry was regenerated, so the build is still watching " +
            "reach(graph.edges, index.ts) instead of dependencies[index.ts]. " +
            "Either the envelope stopped declaring index.ts complete, or the " +
            "host stopped narrowing on that declaration.",
        );
      assertSuccess(
        "cached reuse with the unchanged input",
        validate(project, {
          id: "a",
          age: 1,
          ambient: { tag: "t", flag: true },
          nested: { code: "c", extra: true },
          dynamic: { k: 1 },
        }),
      );
    } finally {
      fs.rmSync(project, { recursive: true, force: true });
    }
  };
