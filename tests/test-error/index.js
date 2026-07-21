const cp = require("child_process");
const fs = require("fs");
const path = require("path");

/**
 * Verifies that typia rejects every invalid call site under `src/`.
 *
 * Each fixture declares `typia.*` calls that the transform must refuse. The
 * evidence of refusal is the diagnostic the build reports, never the emitted
 * JavaScript: a failed build is atomic and publishes nothing, so there is no
 * artifact left to read. This suite therefore asserts that the build fails and
 * that every fixture is named by a typia diagnostic.
 *
 * 1. Build the project and capture its diagnostics; the build must fail.
 * 2. Require every fixture to typecheck, because a TypeScript error aborts the
 *    build before the transform runs and would leave this suite with nothing to
 *    observe.
 * 3. Require every fixture to be named by at least one typia diagnostic.
 * 4. Require every diagnostic code to name an accessor the fixture actually
 *    writes. The code is the only machine-readable identity a rejection carries,
 *    and accepting anything that merely starts with `TS(typia.` let
 *    `TS(typia.protobuf.typia.protobuf.encode)` pass for sixteen entry points
 *    (#2285). The fixture source is the oracle: a code composed by
 *    concatenation, or misspelled, names no call site in it.
 */
const SRC = path.join(__dirname, "src");
const ANSI = /\x1b\[[0-9;]*m/g;

/** Normalizes a compiler-reported path to a POSIX path relative to `src/`. */
const normalize = (location) =>
  path
    .relative(SRC, path.resolve(__dirname, location.split("\\").join("/")))
    .split(path.sep)
    .join("/");

/** Lists every fixture as a POSIX path relative to `src/`. */
const fixtures = () => {
  const list = [];
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const location = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(location);
      else if (entry.name.endsWith(".ts")) list.push(normalize(location));
    }
  };
  walk(SRC);
  return list.sort();
};

/** Runs the build, whose failure is the expected outcome. */
const build = () => {
  const child = cp.spawnSync("pnpm", ["run", "build"], {
    cwd: __dirname,
    encoding: "utf8",
    shell: true,
  });
  return {
    code: child.status,
    output: `${child.stdout ?? ""}\n${child.stderr ?? ""}`.replace(ANSI, ""),
  };
};

/**
 * Splits the build output into typia transform diagnostics and every other
 * compiler diagnostic.
 *
 * A typia rejection carries its API in the error code, as in
 * `TS(typia.llm.schema)`. Anything else is a compiler diagnostic, including a
 * code this parser does not recognize: an error that is not a typia rejection
 * means the fixtures never reached the transform cleanly, which is exactly what
 * the suite must notice rather than skip.
 */
const parse = (output) => {
  const typia = new Map();
  const codes = new Map();
  const compiler = [];
  for (const line of output.split(/\r?\n/)) {
    const match = line.match(/^(\S.*\.ts):\d+:\d+ - error ([^\s:]+):/);
    if (match === null) continue;
    const file = normalize(match[1]);
    if (match[2].startsWith("TS(typia.")) {
      typia.set(file, (typia.get(file) ?? 0) + 1);
      if (codes.has(file) === false) codes.set(file, new Set());
      codes.get(file).add(match[2].slice("TS(".length, -1));
    } else compiler.push(line.trim());
  }
  return { typia, codes, compiler };
};

const main = () => {
  const list = fixtures();
  const { code, output } = build();
  const { typia, codes, compiler } = parse(output);

  const fail = (reasons) => {
    for (const reason of reasons) console.error(reason);
    console.error(`${"-".repeat(70)}\nBuild exited with code ${code}.`);
    process.exit(1);
  };

  // THE BUILD MUST FAIL, BECAUSE EVERY FIXTURE IS INVALID CODE
  if (code === 0)
    fail([
      "The build succeeded, but every fixture under src/ declares a typia call",
      "site that must be rejected.",
      "",
    ]);

  // FIXTURES MUST TYPECHECK, OR THE TRANSFORM NEVER RUNS
  if (compiler.length !== 0)
    fail([
      `The build reported ${compiler.length} non-typia diagnostic(s), so no fixture was`,
      "checked at all: a type error aborts the build before the typia transform",
      "runs. Every fixture must be valid TypeScript that typia alone rejects.",
      "",
      ...compiler.slice(0, 20),
      "",
    ]);

  // EVERY FIXTURE MUST BE NAMED BY A TYPIA DIAGNOSTIC
  const missing = list.filter((file) => !typia.has(file));
  if (missing.length !== 0)
    fail([
      `No typia diagnostic names ${missing.length} of the ${list.length} fixtures below.`,
      "typia accepted the call sites they declare, or the diagnostic format changed.",
      "",
      ...missing.map((file) => `  - src/${file}`),
      "",
      ...(typia.size !== 0
        ? []
        : [
            "No typia diagnostic was parsed at all, so the build output ends below.",
            "",
            ...output.trimEnd().split(/\r?\n/).slice(-15),
            "",
          ]),
    ]);

  // EVERY DIAGNOSTIC CODE MUST NAME AN ACCESSOR ITS FIXTURE WRITES
  const unnamed = [];
  for (const [file, reported] of codes) {
    const source = fs.readFileSync(path.join(SRC, file), "utf8");
    for (const name of reported)
      if (source.includes(name) === false) unnamed.push(`src/${file}: ${name}`);
  }
  if (unnamed.length !== 0)
    fail([
      `${unnamed.length} diagnostic code(s) name no call site in their fixture.`,
      "A typia rejection must be identified by the API that was invoked, so the",
      "code has to be an accessor the fixture writes.",
      "",
      ...unnamed.sort(),
      "",
    ]);

  const total = [...typia.values()].reduce((x, y) => x + y, 0);
  console.log(
    `Every fixture rejected: ${list.length} files, ${total} typia diagnostics, ` +
      `${[...codes.values()].reduce((x, y) => x + y.size, 0)} distinct codes named.`,
  );
};
main();
