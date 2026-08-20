import cp from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const tsc = () =>
  path.join(
    path.dirname(require.resolve("typescript/package.json")),
    "bin",
    "tsc",
  );

/**
 * Names every binding `src/index.ts` exports.
 *
 * The emitted declaration must carry one entry per name, so a build that
 * dropped a declaration cannot pass as a clean one.
 */
const listExportedNames = () =>
  [
    ...fs
      .readFileSync(path.join(directory, "src", "index.ts"), "utf8")
      .matchAll(/^export const (\w+)/gm),
  ].map((match) => match[1]);

/** Splits an emitted declaration file into `{ name, type }` pairs. */
const listDeclarations = (file) =>
  fs
    .readFileSync(file, "utf8")
    .replace(/\r\n/g, "\n")
    .split("\nexport {};")[0]
    .split("\nexport declare const ")
    .slice(1)
    .map((chunk) => {
      const colon = chunk.indexOf(": ");
      return {
        name: chunk.slice(0, colon),
        type: chunk
          .slice(colon + 2)
          .replace(/;\s*$/, "")
          .trim(),
      };
    });

/**
 * Asserts the install still has the shape every check below depends on.
 *
 * Two silent ways this project stops testing anything. If one of typia's
 * dependencies becomes resolvable from here — hoisted, pinned as a direct
 * dependency, or installed by a package manager that flattens — then every
 * borrowed name is nameable again and the whole suite passes while measuring
 * nothing. And if `pnpm-workspace.yaml`'s `overrides` stop applying, the
 * transitive typia packages come from the registry instead of the tarballs just
 * built, so the run says nothing about this working tree.
 */
const HIDDEN_PACKAGES = ["@typia/interface", "@typia/utils"];

const findLayoutFaults = () => {
  const faults = [];

  const reachable = HIDDEN_PACKAGES.filter((name) => {
    try {
      require.resolve(name);
      return true;
    } catch {
      return false;
    }
  });
  if (reachable.length !== 0)
    faults.push(
      [
        "layout: these packages resolve from this project, so the names under",
        "test are nameable again and the run proves nothing:",
        ...reachable.map((name) => `  - ${name}`),
      ].join("\n"),
    );

  // pnpm encodes a `file:` resolution into the store directory name, so the
  // path is what says whether a package came from `experiments/tarballs` or
  // from the registry. Every package here is expected to be packed: `typia`
  // because this project depends on the tarball directly, the other two
  // because `pnpm-workspace.yaml` overrides them onto theirs.
  const packed = [];
  const stale = [];
  const typiaPackageJson = require.resolve("typia/package.json");
  const fromTypia = createRequire(typiaPackageJson);
  for (const [name, resolve] of [
    ["typia", () => typiaPackageJson],
    ...HIDDEN_PACKAGES.map((name) => [name, () => fromTypia.resolve(name)]),
  ]) {
    let resolved;
    try {
      resolved = fs.realpathSync(resolve());
    } catch {
      stale.push(`${name} -> typia cannot resolve it at all`);
      continue;
    }
    (resolved.includes("+tarballs+") ? packed : stale).push(
      `${name} -> ${resolved}`,
    );
  }
  if (stale.length !== 0)
    faults.push(
      [
        "layout: these came from somewhere other than the tarballs just packed,",
        "so the run says nothing about this working tree:",
        ...stale.map((entry) => `  - ${entry}`),
      ].join("\n"),
    );

  if (faults.length === 0)
    console.log(
      `layout: ${HIDDEN_PACKAGES.length} dependencies hidden from the consumer, ${packed.length} packages under test packed from this tree`,
    );
  return faults;
};

/**
 * Names every type typia's own public declarations import from another package.
 *
 * `lib/transform.d.ts` is skipped. `typia/lib/transform` is the build-time
 * entry `ttsc` loads, and `ttsc` is a direct dependency of whoever configures
 * it, so the plugin types it names already resolve on that side.
 */
const listBorrowedTypeNames = () => {
  const lib = path.join(
    path.dirname(require.resolve("typia/package.json")),
    "lib",
  );
  const borrowed = new Map();
  for (const entry of fs.readdirSync(lib)) {
    if (entry.endsWith(".d.ts") === false || entry === "transform.d.ts")
      continue;
    const text = fs.readFileSync(path.join(lib, entry), "utf8");
    for (const match of text.matchAll(
      /^import (?:type )?\{([^}]*)\} from "([^"]+)";$/gm,
    )) {
      if (match[2].startsWith(".")) continue;
      for (const name of match[1].split(",")) {
        const trimmed = name.trim();
        if (trimmed.length !== 0) borrowed.set(trimmed, match[2]);
      }
    }
  }
  return borrowed;
};

/**
 * Every borrowed type must also be importable from the `typia` entry.
 *
 * The sweep in `src/index.ts` reaches a borrowed type only while some public
 * signature still puts it in an inferred position. This reads typia's own
 * declarations instead, so a name that moves into a return type later, or a new
 * dependency altogether, cannot slip in unre-exported and wait for a consumer
 * to find it. The probe imports each name for real rather than parsing an
 * export list, so a barrel or alias change cannot fake the answer.
 */
const findCensusFaults = () => {
  const borrowed = listBorrowedTypeNames();
  if (borrowed.size === 0)
    return ["census: read no borrowed type names out of typia's declarations."];

  // The probe has to sit inside this project: it resolves `typia` the way the
  // consumer does, and a scratch directory in the system temp folder has no
  // `node_modules` above it to resolve through.
  const probe = path.join(directory, `census.${process.pid}.probe.ts`);
  // Importing the names is the whole assertion. Aliasing them would add
  // nothing and would fail on every generic that needs a type argument.
  fs.writeFileSync(
    probe,
    `import type {\n${[...borrowed.keys()]
      .map((name) => `  ${name},`)
      .join("\n")}\n} from "typia";\nexport {};\n`,
  );
  const result = cp.spawnSync(
    process.execPath,
    [
      tsc(),
      // Naming a file on the command line while a tsconfig.json sits beside it
      // is TS5112 without this.
      "--ignoreConfig",
      "--noEmit",
      "--strict",
      "--skipLibCheck",
      "--module",
      "esnext",
      "--moduleResolution",
      "bundler",
      "--target",
      "ES2020",
      "--types",
      "node",
      probe,
    ],
    { cwd: directory, encoding: "utf8" },
  );
  fs.rmSync(probe, { force: true });
  if (result.status === 0) {
    console.log(
      `census: ${borrowed.size} borrowed type names, all reachable through typia`,
    );
    return [];
  }
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
  const unreachable = [
    ...new Set(
      [...output.matchAll(/has no exported member(?: named)? '([^']+)'/g)].map(
        (match) => match[1],
      ),
    ),
  ];
  return [
    [
      "census: typia names these types in its own public declarations but does",
      "not re-export them, so a consumer cannot name them either:",
      ...(unreachable.length === 0
        ? [output.trim()]
        : unreachable.map(
            (name) => `  - ${name} (borrowed from ${borrowed.get(name)})`,
          )),
    ].join("\n"),
  ];
};

/**
 * Compiles the project with `tsc` and reports whether it accepted the emit.
 *
 * `ttsc` prints TS2742 / TS2883 but exits 0 and writes `any` where the
 * unnameable type belonged, so its exit code cannot decide this. `tsc` fails
 * hard and names the offending type, which is the diagnostic worth reading in
 * CI. Declarations only: the transform does not run under plain `tsc`, so the
 * JavaScript this pass would emit is not the JavaScript a consumer gets.
 */
const emitWithTypeScript = () => {
  const declarationDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "typia-declaration-"),
  );
  const result = cp.spawnSync(
    process.execPath,
    [
      tsc(),
      "-p",
      "tsconfig.json",
      "--emitDeclarationOnly",
      "--declarationDir",
      declarationDir,
    ],
    { cwd: directory, stdio: "inherit" },
  );
  const file = path.join(declarationDir, "index.d.ts");
  const declarations = fs.existsSync(file) ? listDeclarations(file) : [];
  fs.rmSync(declarationDir, { recursive: true, force: true });
  return { status: result.status, declarations };
};

/**
 * Every inferred type must be nameable through the `typia` entry alone.
 *
 * A name typia exposes in a public signature but does not re-export leaves
 * declaration emit with no specifier this project can resolve. TypeScript then
 * either refuses to write the declaration or widens it to `any`, and both
 * outcomes reach a consumer's own published `.d.ts`.
 */
const findPortabilityFaults = (label, declarations, expected) => {
  const faults = [];
  const missing = expected.filter(
    (name) => declarations.some((entry) => entry.name === name) === false,
  );
  if (missing.length !== 0)
    faults.push(`${label}: missing declarations for ${missing.join(", ")}.`);
  else if (declarations.length !== expected.length)
    faults.push(
      `${label}: expected ${expected.length} declarations, found ${declarations.length}.`,
    );

  const widened = declarations.filter((entry) => /\bany\b/.test(entry.type));
  if (widened.length !== 0)
    faults.push(
      [
        `${label}: ${widened.length} declaration(s) widened to any, which is how an`,
        "unnameable type reaches a consumer without failing the build:",
        ...widened.map((entry) => `  - ${entry.name}: ${entry.type}`),
      ].join("\n"),
    );

  const foreign = [
    ...new Set(
      declarations
        .flatMap((entry) => [...entry.type.matchAll(/import\("([^"]+)"\)/g)])
        .map((match) => match[1])
        .filter((specifier) => specifier !== "typia"),
    ),
  ];
  if (foreign.length !== 0)
    faults.push(
      [
        `${label}: declaration emit reached outside the typia entry:`,
        ...foreign.map((specifier) => `  - ${specifier}`),
      ].join("\n"),
    );

  return faults;
};

/**
 * Pins the three call sites samchon/typia#2359 reported and uncovered.
 *
 * The sweep above fails on any unnameable type, but only while the emit still
 * produces one. These three assert the witnesses stay named rather than quietly
 * leaving the file.
 */
const WITNESSES = [
  ["validateMember", "typia.StandardSchemaV1"],
  ["validateEqualsMember", "typia.StandardSchemaV1"],
  ["jsonApplication", "typia.IJsonSchemaApplication"],
];

const findWitnessFaults = (label, declarations) =>
  WITNESSES.flatMap(([name, expected]) => {
    const declaration = declarations.find((entry) => entry.name === name);
    if (declaration === undefined)
      return [`${label}: ${name} left the declaration file.`];
    else if (declaration.type.includes(expected) === false)
      return [`${label}: ${name} lost ${expected}, got "${declaration.type}".`];
    return [];
  });

const main = () => {
  const expected = listExportedNames();
  if (expected.length === 0)
    throw new Error("src/index.ts exports nothing to check.");

  const built = path.join(directory, "lib", "index.d.ts");
  if (fs.existsSync(built) === false)
    throw new Error(`Run "pnpm run build" first: ${built} does not exist.`);

  const faults = [...findLayoutFaults(), ...findCensusFaults()];
  const typescript = emitWithTypeScript();
  // A hard `tsc` failure emits nothing, so its own declaration checks would
  // only restate the whole export list. The diagnostics it printed above name
  // the cause; the `ttsc` artifact below still gets read either way.
  const targets =
    typescript.status === 0
      ? [
          ["tsc", typescript.declarations],
          ["ttsc", listDeclarations(built)],
        ]
      : [["ttsc", listDeclarations(built)]];
  if (typescript.status !== 0)
    faults.push(
      `tsc: declaration emit failed with exit code ${typescript.status}; its diagnostics are above.`,
    );
  for (const [label, declarations] of targets) {
    const found = [
      ...findPortabilityFaults(label, declarations, expected),
      ...findWitnessFaults(label, declarations),
    ];
    faults.push(...found);
    if (found.length === 0)
      console.log(
        `${label}: ${declarations.length} declarations named through typia, ${WITNESSES.length} regression witnesses intact`,
      );
  }
  if (faults.length !== 0) {
    console.error(`\n${faults.join("\n")}`);
    process.exit(1);
  }
};
main();
