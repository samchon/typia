import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import fs from "fs";
import path from "path";

import { Git } from "../Git";

/**
 * Verifies no tracked test source asserts through `TestValidator.equals`.
 *
 * `@nestia/e2e`'s `TestValidator.equals` walks only its first argument's keys
 * and sees no content in `Date`, `Map`, or `Set`, so an assertion that put the
 * actual first passed whatever the actual lost. #2350 triaged the call sites
 * one by one and the trap still returned in #2399; the suites now assert
 * through `TestEquality` instead (#2401). A single new call would reopen the
 * trap silently, because it still passes, so only a scan can catch it.
 *
 * 1. Assert the matcher finds each planted spelling of the call, so the scan
 *    cannot pass by matching nothing.
 * 2. Assert it ignores prose that only names the function, and that a comment
 *    opener inside a string, template, or regular expression hides nothing.
 * 3. Collect every tracked TypeScript source under `tests/`, and assert the scan
 *    reached them.
 * 4. Assert none of them calls `TestValidator.equals`.
 */
export const test_feature_identity_equality_oracle = (): void => {
  // assembled at run time, so this file does not match its own scan
  const V: string = ["Test", "Validator"].join("");
  for (const planted of [
    `${V}.equals("title", x, y);`,
    `${V}.equals<IMember>("title", x, y);`,
    `${V}\n  .equals("title")(x)(y);`,
    `${V}?.equals("title", x, y);`,
    `(${V} as any).equals("title", x, y);`,
    `const eq = ${V}.equals;`,
    `${V}.equals.call(null, "title", x, y);`,
    `${V}["equals"]("title", x, y);`,
    `const { equals } = ${V};`,
    `import { ${V} as V } from "@nestia/e2e";`,
  ])
    TestEquality.equals(
      `planted ${JSON.stringify(planted)}`,
      calls(planted),
      [1],
    );

  // a comment opener inside a literal must not hide the code after it
  const call: string = `${V}.equals("t", x, y);`;
  const tick: string = "`";
  for (const [title, planted, line] of [
    ["url string", `const url = "https://typia.io"; ${call}`, 1],
    ["opener string", `const a = "/*";\n${call}\nconst b = "*/";`, 2],
    ["template", `const a = ${tick}/* \${"}"} ${tick};\n${call} // */`, 2],
    ["regex", `const r = /\\/\\*/;\n${call}\nconst q = "*/";`, 2],
  ] as const)
    TestEquality.equals(`literal ${title}`, calls(planted), [line]);
  for (const prose of [
    `// \`${V}.equals\` walked only its first argument's keys.`,
    `/** \`${V}.equals(x, y)\` once passed a dropped key. */`,
    `/*\n * ${V}.equals(\n */`,
    `${V}.predicate("equals", true);`,
    `${V}.equalsLike("title", x, y);`,
  ])
    TestEquality.equals(`prose ${JSON.stringify(prose)}`, calls(prose), []);

  const root: string = Git.toplevel();
  const files: string[] = Git.run(["ls-files", "-z", "--", "tests"], root)
    .split("\0")
    .filter((file) => /^tests\/[^/]+\/src\/.+\.ts$/.test(file))
    // the index can still list a file the working tree deleted, which runs
    // nowhere, as `FeatureIdentity.collect` reasons
    .filter((file) => fs.existsSync(path.join(root, file)));
  TestValidator.predicate(
    `collected test sources (${files.length})`,
    files.length >= POPULATED,
  );
  TestEquality.equals(
    "one-way equality calls",
    [] as string[],
    files.flatMap((file) =>
      calls(fs.readFileSync(path.join(root, file), "utf8")).map(
        (line) => `${file}:${line}`,
      ),
    ),
  );
};

/**
 * One-based lines where `text` reaches `TestValidator.equals`.
 *
 * Comments are blanked first, keeping their line breaks, so prose that names
 * the function is not a use while any code spelling of it is.
 */
const calls = (text: string): number[] => {
  const code: string = blank(text);
  const output: number[] = [];
  for (const match of code.matchAll(PATTERN))
    output.push(code.slice(0, match.index).split("\n").length);
  return output;
};

/**
 * Blanks every comment, keeping line breaks.
 *
 * A comment opener inside a string, a template, or a regular expression is
 * text, not a comment: a URL's `//` or a `"/*"` literal must not hide the code
 * after it. A `/` starts a regular expression when the previous significant
 * character cannot end an operand, the usual lexer heuristic.
 *
 * This is a lexer, not a parser, on purpose. The repository compiles with
 * TypeScript 7, whose compiler is native and ships no JavaScript parser API;
 * the only `typescript` 5 in the tree is the website's transitive dependency
 * (#2414). Scanning the text is therefore the tool the contract offers, and the
 * planted cases above are what keep it honest.
 */
const blank = (text: string): string => {
  const output: string[] = text.split(""); // UTF-16 units, as indexed
  const erase = (from: number, to: number): void => {
    for (let k: number = from; k < to; ++k)
      if (output[k] !== "\n") output[k] = " ";
  };
  const templates: number[] = []; // brace depth of each open `${`
  let previous: string = "";
  let i: number = 0;
  const skipQuoted = (quote: string): void => {
    for (++i; i < text.length && text[i] !== quote; ++i)
      if (text[i] === "\\") ++i;
      else if (text[i] === "\n" && quote !== "`") break;
    ++i;
  };
  const skipTemplate = (): void => {
    for (; i < text.length; ++i)
      if (text[i] === "\\") ++i;
      else if (text[i] === "`") {
        ++i;
        return;
      } else if (text[i] === "$" && text[i + 1] === "{") {
        templates.push(0);
        i += 2;
        return;
      }
  };
  while (i < text.length) {
    const c: string = text[i]!;
    const n: string | undefined = text[i + 1];
    if (c === "/" && n === "/") {
      const end: number = text.indexOf("\n", i);
      const to: number = end === -1 ? text.length : end;
      erase(i, to);
      i = to;
    } else if (c === "/" && n === "*") {
      const end: number = text.indexOf("*/", i + 2);
      const to: number = end === -1 ? text.length : end + 2;
      erase(i, to);
      i = to;
    } else if (c === "'" || c === '"') {
      skipQuoted(c);
      previous = c;
    } else if (c === "`") {
      ++i;
      skipTemplate();
      previous = c;
    } else if (
      c === "/" &&
      (previous === "" || /[(,=:[!&|?{};+\-*%<>~^]/.test(previous))
    ) {
      let klass: boolean = false;
      for (++i; i < text.length && text[i] !== "\n"; ++i)
        if (text[i] === "\\") ++i;
        else if (text[i] === "[") klass = true;
        else if (text[i] === "]") klass = false;
        else if (text[i] === "/" && klass === false) break;
      ++i;
      previous = "/";
    } else {
      if (templates.length !== 0 && c === "{")
        ++templates[templates.length - 1]!;
      else if (templates.length !== 0 && c === "}") {
        if (templates[templates.length - 1] === 0) {
          templates.pop();
          ++i;
          skipTemplate();
          previous = "`";
          continue;
        }
        --templates[templates.length - 1]!;
      }
      if (/\s/.test(c) === false) previous = c;
      ++i;
    }
  }
  return output.join("");
};

/**
 * Any member access to `equals` on `TestValidator`, through a cast or optional
 * chaining included, a destructuring of it, or a renaming import that would
 * hide the name from the rest of the pattern.
 */
const PATTERN =
  /\bTestValidator\b(?:\s*\)|\s+as\s+[\w.<>]+)*\s*(?:\??\.\s*equals\b|(?:\?\.)?\s*\[\s*["'`]equals["'`]\s*\])|\{[^}]*\bequals\b[^}]*\}\s*=\s*\(?\s*TestValidator\b|\bimport\s*(?:type\s*)?\{[^}]*\bTestValidator\s+as\b/g;

/**
 * A floor, not an expectation: the tracked suites hold over a thousand sources.
 * Half of that survives any plausible pruning, while a scan that stopped
 * finding the trees falls far below it.
 */
const POPULATED = 500;
