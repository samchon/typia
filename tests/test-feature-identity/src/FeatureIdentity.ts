import cp from "child_process";
import fs from "fs";
import path from "path";

/**
 * Naming-identity model of the hand-written feature test files.
 *
 * `DynamicExecutor` discovers a test by the **exported function name**, not by
 * the file name: it requires every module under a suite's `src/features`, keeps
 * each exported `test_`-prefixed function, and keys both the `--include` /
 * `--exclude` filter and the report entry on that exported name. A file whose
 * export disagrees with its own basename is therefore unreachable by its own
 * name, and two files exporting the same name inside one suite report two
 * indistinguishable executions.
 *
 * This namespace turns that contract into a checkable invariant.
 * {@link collect} gathers the committed feature files, {@link parse} extracts
 * the `test_*` declarations each one exports, and {@link diagnose} reports
 * every violation.
 */
export namespace FeatureIdentity {
  /** A single committed feature-tree source file. */
  export interface IFeatureFile {
    /** Test workspace directory name, such as `test-utils`. */
    suite: string;

    /** Repository-relative, slash-separated path, used in diagnostics. */
    path: string;

    /** File name without its `.ts` extension. */
    basename: string;

    /** Every `test_`-prefixed value the file exports, in source order. */
    exports: string[];
  }

  /**
   * Report every violation of the feature-identity invariant.
   *
   * The invariant has two halves:
   *
   * 1. **Identity** — a `test_`-named file exports exactly one `test_*`
   *    function, and that name equals the file's basename. A file *not* named
   *    `test_*` is a helper and must export no `test_*` function at all,
   *    because `DynamicExecutor` would otherwise run a test that no file name
   *    announces.
   * 2. **Uniqueness** — no two files in the **same suite** export the same
   *    name. Suites run as separate processes with separate reports, so the
   *    same name in two different suites is legal and is not reported.
   *
   * @param files Feature files to inspect.
   * @returns One human-readable diagnostic per violation; empty when the tree
   *   satisfies the invariant.
   */
  export const diagnose = (files: IFeatureFile[]): string[] => {
    const diagnostics: string[] = [];

    // 1. IDENTITY
    for (const file of files)
      if (file.basename.startsWith(PREFIX) === false) {
        // A helper file must not smuggle in a test the file name cannot select.
        if (file.exports.length !== 0)
          diagnostics.push(
            `${file.path}: helper file exports ${describe(file.exports)}, ` +
              `but only a "${PREFIX}" file may export a test function.`,
          );
      } else if (file.exports.length === 0)
        diagnostics.push(
          `${file.path}: exports no "${PREFIX}" function. Export exactly ` +
            `one, declared as "export const ${file.basename} = ...".`,
        );
      else if (file.exports.length > 1)
        diagnostics.push(
          `${file.path}: exports ${describe(file.exports)}, but a feature ` +
            `file must export exactly one test function.`,
        );
      else if (file.exports[0] !== file.basename)
        diagnostics.push(
          `${file.path}: exports "${file.exports[0]}" but its file name ` +
            `demands "${file.basename}". DynamicExecutor selects and reports ` +
            `the exported name, so the two must agree.`,
        );

    // 2. UNIQUENESS, SCOPED TO ONE SUITE
    const suites: Map<string, Map<string, string[]>> = new Map();
    for (const file of files) {
      let owners: Map<string, string[]> | undefined = suites.get(file.suite);
      if (owners === undefined) suites.set(file.suite, (owners = new Map()));
      for (const name of file.exports) {
        const paths: string[] | undefined = owners.get(name);
        if (paths === undefined) owners.set(name, [file.path]);
        else paths.push(file.path);
      }
    }
    for (const [suite, owners] of suites)
      for (const [name, paths] of owners)
        if (paths.length > 1)
          diagnostics.push(
            `${suite}: "${name}" is exported by ${paths.length} files ` +
              `(${paths.join(", ")}). Two executions would report the same ` +
              `name, and "--include ${name}" would select both.`,
          );

    return diagnostics.sort();
  };

  /**
   * Gather every committed feature file of every test suite.
   *
   * Reads the tree through `git ls-files`, so only **committed** sources are
   * inspected. That boundary is the point rather than an accident: the
   * generated matrix suites keep their `src/features` gitignored and rebuild
   * it on every run, and their generator — not this hand-written-source check
   * — owns their naming. Working from git also makes the result independent of
   * whichever suites happen to have run before this one.
   *
   * `-z` is not decoration. Without it `git ls-files` honors `core.quotePath`
   * and prints a non-ASCII path quoted and octal-escaped, which this scan's
   * anchored pattern would not match — the file would drop out silently, which
   * is exactly the failure the suite exists to prevent.
   *
   * @param root Repository root; defaults to the enclosing git work tree.
   * @returns Every committed `tests/<suite>/src/features` source file, parsed.
   */
  export const collect = (root: string = toplevel()): IFeatureFile[] =>
    git(["ls-files", "-z", "--", "tests"], root)
      .split("\0")
      .map((line) => FEATURE_PATH.exec(line))
      .filter((match) => match !== null)
      .map((match) => ({
        match,
        absolute: path.resolve(root, match[0]),
      }))
      // `git ls-files` reads the index while the suites read the working tree.
      // A staged-but-deleted file runs nowhere, so it violates nothing.
      .filter(({ absolute }) => fs.existsSync(absolute))
      .map(({ match, absolute }) => ({
        suite: match[1]!,
        path: match[0],
        basename: path.posix.basename(match[0], ".ts"),
        exports: parse(fs.readFileSync(absolute, "utf8")),
      }));

  /**
   * Extract the `test_`-prefixed values a feature module exports.
   *
   * Deliberately recognizes only top-level `export const|let|var|function`
   * declarations, the form every feature file uses. An exotic export — a
   * renamed re-export or a default export — yields no match, so
   * {@link diagnose} reports the file as exporting nothing rather than passing
   * it unchecked. The check fails closed.
   *
   * @param code TypeScript source text.
   * @returns Exported `test_*` names in source order.
   */
  export const parse = (code: string): string[] =>
    [...code.matchAll(EXPORTED_TEST)].map((match) => match[1]!);

  const PREFIX = "test_";

  /**
   * A committed `tests/<suite>/src/features` source file.
   *
   * Declaration files are excluded: they carry no runnable export, so judging
   * them against the naming rule would only invent false diagnostics.
   */
  const FEATURE_PATH = /^tests\/([^/]+)\/src\/features\/.+(?<!\.d)\.ts$/;

  /** A top-level `export const|let|var|function test_*` declaration. */
  const EXPORTED_TEST =
    /^export\s+(?:const|let|var|(?:async\s+)?function)\s+(test_[A-Za-z0-9_]*)/gm;

  const describe = (names: string[]): string =>
    `${names.length} test ${names.length === 1 ? "function" : "functions"} ` +
    `(${names.join(", ")})`;

  const toplevel = (): string =>
    git(["rev-parse", "--show-toplevel"], __dirname).trim();

  const git = (args: string[], cwd: string): string => {
    try {
      return cp.execFileSync("git", args, {
        cwd,
        encoding: "utf8",
        // Capture git's own report instead of letting it print itself into
        // the suite log, so a failure arrives through the throw below.
        stdio: ["ignore", "pipe", "pipe"],
        // The default 1 MB would turn repository growth into an ENOBUFS
        // surfacing from inside a naming check.
        maxBuffer: 64 * 1024 * 1024,
      });
    } catch (error) {
      // Never degrade to an empty tree: a vacuous pass would hide the very
      // regressions this suite exists to catch.
      const stderr: string = String(
        (error as { stderr?: unknown }).stderr ?? "",
      ).trim();
      throw new Error(
        `Failed to run "git ${args.join(" ")}" in "${cwd}". ` +
          `The feature-identity check reads the committed tree through git.\n` +
          `${(error as Error).message}` +
          `${stderr.length !== 0 ? `\n${stderr}` : ""}`,
      );
    }
  };
}
