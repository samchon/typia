import { TestEquality } from "@typia/template/equality";

import { AssertionOracle } from "../AssertionOracle";

/**
 * Verifies the prohibited-oracle analyzer distinguishes uses from prose.
 *
 * `@nestia/e2e`'s `TestValidator.equals` walks only its first argument's keys
 * and sees no content in `Date`, `Map`, or `Set`, so an assertion that put the
 * actual first passed whatever the actual lost. #2350 triaged the call sites
 * one by one and the trap still returned in #2399; the suites now assert
 * through `TestEquality` instead (#2401). `TestValidator.error` never fails on
 * a synchronous task: it throws its own failure inside the `try` meant for the
 * task's exception and swallows it, so three tests asserted nothing (#2460). A
 * single new call would reopen either trap silently, because it still passes,
 * so only a scan can catch it.
 *
 * 1. Assert the matcher finds each planted spelling of either call, so the scan
 *    cannot pass by matching nothing.
 * 2. Assert it ignores prose that only names the functions, siblings such as
 *    `httpError`, and that a comment opener inside a string, template, or
 *    regular expression hides nothing.
 *
 * @evidence contracts/testing.md#behavioral-verification Calls the public AssertionOracle.find scanner on deliberate source strings and compares one-based diagnostic lines; prohibited accesses and aliases differ from prose and permitted sibling members.
 * @evidence contracts/testing.md#independent-expectations Literal planted uses and line positions follow the explicit prohibited-oracle source policy, while comments and allowed members establish independent empty-diagnostic controls.
 * @evidence contracts/testing.md#distinguishing-cases Direct, optional, cast, indexed, destructured and aliased spellings are rejected; comment openers inside strings, templates and regexes must not hide later uses, and prose or predicate/httpError siblings must remain accepted.
 * @evidence contracts/testing.md#execution-ownership The feature-identity start command explicitly invokes this fixture-only exported function; maintained-tree enforcement belongs to root test:integrity and is not counted as runtime or analyzer-test evidence.
 */
export const test_feature_identity_vacuous_oracle = (): void => {
  const calls = AssertionOracle.find;
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
    `const T = ${V};`,
    `const T: typeof ${V} = ${V};`,
    `let T = ${V};`,
    `var T = ${V} ;`,
    `import T = ${V};`,
    `${V}.error("title", () => task());`,
    `${V}\n  .error("title", () => task());`,
    `${V}?.error("title", () => task());`,
    `(${V} as any).error("title", () => task());`,
    `${V}["error"]("title", () => task());`,
    `const { error } = ${V};`,
    `const { predicate, error: fails } = ${V};`,
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
    `${V}.predicate("error", true);`,
    `${V}.httpError("title", 401, () => task());`,
    `${V}.errorLike("title", () => task());`,
    `const { predicate } = ${V};`,
    `const V2 = ${V}.predicate;`,
    `const V2 = ${V}\n  .predicate;`,
  ])
    TestEquality.equals(`prose ${JSON.stringify(prose)}`, calls(prose), []);
};
