import { parse as parseModule } from "@babel/parser";
import type { Expression } from "@babel/types";
import fs from "fs";
import path from "path";

import { Git } from "./Git";

/**
 * Naming-identity model of the hand-written feature test files.
 *
 * `DynamicExecutor` discovers a test by the **exported function name**, not by
 * the file name: it requires every module under a suite's `src/features`, keeps
 * each exported `test_`-prefixed function, and keys both the `--include` /
 * `--exclude` filter and the report entry on that exported name. A file whose
 * export disagrees with its own basename is therefore unreachable by its own
 * name, and two files exporting the same name inside one suite report two
 * indistinguishable executions. A suite's plugin-free unit cases under
 * `src/unit/features` register the same exported names with `node:test`, so
 * they share the naming rule and the suite's uniqueness domain.
 *
 * This namespace turns that contract into a checkable invariant. {@link collect}
 * gathers the tracked feature files, {@link parse} extracts the `test_*`
 * declarations each one exports, and {@link diagnose} reports every violation.
 *
 * @evidence contracts/common.md#principled-implementation Tracked source, parsed export identities and per-suite diagnostics represent the naming policy separately; source syntax determines identities and no static result certifies runtime discovery or assertion outcomes.
 * @evidence contracts/common.md#clear-and-simple-design Collection, extraction and diagnosis expose distinct operations; the shared file record carries only suite identity, path, basename and copied names.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Every maintained feature follows the same policy and failed source collection or parsing propagates instead of supplying a vacuous population or a known-file exception.
 * @evidence contracts/common.md#meaningful-documentation The namespace explains name-driven discovery and the policy consumers, while exported operations document tracked provenance, syntax limitations and per-suite uniqueness.
 */
export namespace FeatureIdentity {
  /**
   * Tracked feature identity and copied source-extraction results.
   *
   * @evidence contracts/common.md#principled-implementation Suite and repository-relative path establish diagnostic ownership, basename supplies the file identity and ordered extracted names supply its declaration identities without retaining parser nodes.
   * @evidence contracts/common.md#clear-and-simple-design Four fields carry exactly the data required by per-file and same-suite diagnosis; source parsing and filesystem lifetime are separate operations.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The record contains observed identity data rather than a hardcoded acceptance flag or assertion that its exports have executed.
   * @evidence contracts/common.md#meaningful-documentation Each field identifies its suite, path spelling, extension-free basename or source-order names so consumers can interpret diagnostics without parser implementation knowledge.
   */
  export interface IFeatureFile {
    /** Test workspace directory name, such as `test-utils`. */
    suite: string;

    /** Repository-relative, slash-separated path, used in diagnostics. */
    path: string;

    /** File name without its `.ts` extension. */
    basename: string;

    /** Potential function identities extracted from source, in source order. */
    exports: string[];
  }

  /**
   * Report every violation of the feature-identity invariant.
   *
   * The invariant has two halves:
   *
   * 1. **Identity** — a `test_`-named file exports exactly one `test_*` function,
   *    and that name equals the file's basename. A file _not_ named `test_*` is
   *    a helper and must export no `test_*` function at all, because
   *    `DynamicExecutor` would otherwise run a test that no file name
   *    announces.
   * 2. **Uniqueness** — no two files in the **same suite** export the same name.
   *    Suites run as separate processes with separate reports, so the same name
   *    in two different suites is legal and is not reported.
   *
   * @param files Feature files to inspect.
   *
   * @returns One human-readable diagnostic per violation; empty when the tree
   *   satisfies the invariant.
   *
   * @evidence contracts/common.md#principled-implementation File/export equality and exactly-one identity are checked independently from same-suite uniqueness; grouping names by suite preserves legitimate cross-suite repetitions and sorted diagnostics report all observed violations.
   * @evidence contracts/common.md#clear-and-simple-design A per-file pass and a suite/name ownership map separate the two constraints without inspecting source or running tests.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Comparisons use the declared naming policy for every record, not a list of known broken paths, and do not claim static identities establish runtime behavior.
   * @evidence contracts/common.md#meaningful-documentation Native prose specifies helper, missing, multiple and mismatched identity outcomes and the reason uniqueness is limited to one suite; the return contract identifies complete sorted diagnostics.
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
   * Gather every tracked feature file of every test suite.
   *
   * Reads the tree through `git ls-files`, so only **tracked** sources are
   * inspected — including one staged but not yet committed, which is about to
   * become everyone's problem and should be checked now. That boundary is the
   * point rather than an accident: the generated matrix suites keep their
   * `src/features` gitignored and rebuild it on every run, and their generator
   * — not this hand-written-source check — owns their naming. Working from git
   * also makes the result independent of whichever suites happen to have run
   * before this one.
   *
   * `-z` is not decoration. Without it `git ls-files` honors `core.quotePath`
   * and prints a non-ASCII path quoted and octal-escaped, which this scan's
   * anchored pattern would not match — the file would drop out silently, which
   * is exactly the failure the suite exists to prevent.
   *
   * @param root Repository root; defaults to the enclosing git work tree.
   *
   * @returns Every tracked `tests/<suite>/src/features` and
   *   `tests/<suite>/src/unit/features` source file, parsed.
   *
   * @evidence contracts/common.md#principled-implementation NUL-delimited tracked paths preserve Unicode names and staged source provenance; the working-tree existence check excludes removed files, and each surviving feature is parsed before its copied record is returned.
   * @evidence contracts/common.md#clear-and-simple-design Path selection stays separate from extraction and diagnosis; each surviving file contributes one copied identity record through the same source parser.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Generated trees remain excluded through their untracked provenance, not fixture-name exceptions; failed git, file reads or syntax extraction cannot turn into a successful empty inventory.
   * @evidence contracts/common.md#meaningful-documentation The native comment explains tracked/staged/deleted ownership, NUL-separated paths and generated-tree responsibility; the return contract identifies the parsed tracked-file records.
   */
  export const collect = (root: string = Git.toplevel()): IFeatureFile[] =>
    Git.run(["ls-files", "-z", "--", "tests"], root)
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
   * Reads complete module-level declarations with Babel TypeScript syntax.
   * Comments, literal contents, ambient declarations and literal non-functions
   * contribute no function identity. Erased wrappers do not turn a scalar into
   * a function. References and computed initializers retain their declaration
   * identity; this static check does not establish their runtime callability.
   * Renamed/default exports remain unsupported. Invalid syntax throws instead
   * of supplying a partial inventory. AST identifier names decode Unicode
   * escapes; no module is executed to find its identities.
   *
   * @param code TypeScript source text.
   *
   * @returns Exported `test_*` names in source order.
   *
   * @evidence contracts/common.md#principled-implementation The TypeScript syntax tree supplies actual module exports and every declared binding in source order; ambient declarations have no runtime value. The private classifier unwraps parentheses and erased assertions, then rejects literals and unary, update or non-logical binary operations because JavaScript semantics cannot produce functions from them. Other computed values remain a static limitation rather than a callability proof.
   * @evidence contracts/common.md#clear-and-simple-design One module-body pass enumerates actual exports and delegates value classification; the parser supplies decoded identifier names without a compiler Program, module execution or a line-pattern parser.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The supported Babel TypeScript parser supplies declaration context without source rewriting or fixture exceptions; the private classifier neither evaluates modules nor treats a cast as executable proof.
   * @evidence contracts/common.md#meaningful-documentation The native comment explains syntax completeness, supported and unsupported exports, computed-value limitations and decoded names; syntax failure remains observable rather than yielding a partial result.
   */
  export const parse = (code: string): string[] => {
    const program = parseModule(code, {
      sourceType: "module",
      plugins: ["typescript"],
      attachComment: false,
      createParenthesizedExpressions: true,
    }).program;
    const output: string[] = [];
    for (const statement of program.body) {
      if (statement.type !== "ExportNamedDeclaration") continue;
      const declaration = statement.declaration;
      if (declaration?.type === "FunctionDeclaration") {
        const name = declaration.id?.name;
        if (name?.startsWith(PREFIX)) output.push(name);
      } else if (
        declaration?.type === "VariableDeclaration" &&
        !declaration.declare
      )
        for (const binding of declaration.declarations) {
          if (
            binding.id.type !== "Identifier" ||
            binding.init == null ||
            !potentialFunction(binding.init)
          )
            continue;
          if (binding.id.name.startsWith(PREFIX)) output.push(binding.id.name);
        }
    }
    return output;
  };

  const PREFIX = "test_";

  /**
   * A tracked `tests/<suite>/src/features` or `tests/<suite>/src/unit/features`
   * source file.
   *
   * A suite may register portable unit cases under `src/unit` beside its
   * `DynamicExecutor` population. Both populations draw on the suite's exported
   * test names, so one naming rule and one uniqueness domain judge them.
   * Declaration files are excluded: they carry no runnable export, so judging
   * them against the naming rule would only invent false diagnostics.
   */
  const FEATURE_PATH =
    /^tests\/([^/]+)\/src\/(?:unit\/)?features\/.+(?<!\.d)\.ts$/;

  /**
   * Rejects literal and primitive-operation values after erased wrappers.
   *
   * References, calls and other computed expressions remain potential
   * functions; determining their values belongs to type checking and runtime
   * discovery. AST nodes remain local to this extraction and no parsed tree is
   * retained.
   */
  const potentialFunction = (input: Expression): boolean => {
    let node = input;
    for (;;) {
      switch (node.type) {
        case "ParenthesizedExpression":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          node = node.expression;
          break;
        default:
          return !NON_FUNCTION_VALUES.has(node.type);
      }
    }
  };

  const NON_FUNCTION_VALUES = new Set([
    "NumericLiteral",
    "BigIntLiteral",
    "StringLiteral",
    "TemplateLiteral",
    "RegExpLiteral",
    "BooleanLiteral",
    "NullLiteral",
    "ObjectExpression",
    "ArrayExpression",
    "UnaryExpression",
    "UpdateExpression",
    "BinaryExpression",
  ]);

  const describe = (names: string[]): string =>
    `${names.length} test ${names.length === 1 ? "function" : "functions"} ` +
    `(${names.join(", ")})`;
}
