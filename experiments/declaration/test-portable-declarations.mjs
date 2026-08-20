import cp from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

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
 * Compiles the project with `tsc` and reports whether it accepted the emit.
 *
 * `ttsc` prints TS2742 / TS2883 but exits 0 and writes `any` where the
 * unnameable type belonged, so its exit code cannot decide this. `tsc` fails
 * hard and names the offending type, which is the diagnostic worth reading in
 * CI. Declarations only: the transform does not run under plain `tsc`, so the
 * JavaScript this pass would emit is not the JavaScript a consumer gets.
 */
const emitWithTypeScript = () => {
  const tsc = path.join(
    path.dirname(require.resolve("typescript/package.json")),
    "bin",
    "tsc",
  );
  const declarationDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "typia-declaration-"),
  );
  const result = cp.spawnSync(
    process.execPath,
    [
      tsc,
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

  const faults = [];
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
