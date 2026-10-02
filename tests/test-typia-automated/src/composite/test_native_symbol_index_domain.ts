import typia from "typia";

declare const explicitSymbol: unique symbol;

interface SymbolIndex {
  name: string;
  [key: symbol]: number;
}

type BrandedSymbol = symbol & {
  readonly __brand: unique symbol;
};

interface BrandedSymbolIndex {
  name: string;
  [key: BrandedSymbol]: number;
}

interface PlainObject {
  name: string;
}

interface StringIndex {
  name: string;
  [key: string]: string;
}

interface ExplicitSymbolMember {
  name: string;
  [explicitSymbol]: number;
}

type Assert<T extends true> = T;
/**
 * Pins string exclusion in keyof SymbolIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source SymbolIndex declaration determines whether the authored string domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _SymbolIndexHasNoStringDomain = Assert<
  string extends keyof SymbolIndex ? false : true
>;
/**
 * Pins number exclusion in keyof SymbolIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source SymbolIndex declaration determines whether the authored number domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _SymbolIndexHasNoNumberDomain = Assert<
  number extends keyof SymbolIndex ? false : true
>;
/**
 * Pins symbol membership in keyof SymbolIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source SymbolIndex declaration determines whether the authored symbol domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _SymbolIndexHasSymbolDomain = Assert<
  symbol extends keyof SymbolIndex ? true : false
>;
/**
 * Pins string exclusion in keyof BrandedSymbolIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source BrandedSymbolIndex declaration determines whether the authored string domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _BrandedSymbolIndexHasNoStringDomain = Assert<
  string extends keyof BrandedSymbolIndex ? false : true
>;
/**
 * Pins number exclusion in keyof BrandedSymbolIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source BrandedSymbolIndex declaration determines whether the authored number domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _BrandedSymbolIndexHasNoNumberDomain = Assert<
  number extends keyof BrandedSymbolIndex ? false : true
>;
/**
 * Pins BrandedSymbol membership in keyof BrandedSymbolIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source BrandedSymbolIndex declaration determines whether the authored BrandedSymbol domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _BrandedSymbolIndexHasBrandedDomain = Assert<
  BrandedSymbol extends keyof BrandedSymbolIndex ? true : false
>;
/**
 * Pins string membership in keyof StringIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source StringIndex declaration determines whether the authored string domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _StringIndexHasStringDomain = Assert<
  string extends keyof StringIndex ? true : false
>;
/**
 * Pins number membership in keyof StringIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source StringIndex declaration determines whether the authored number domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _StringIndexHasNumberDomain = Assert<
  number extends keyof StringIndex ? true : false
>;
/**
 * Pins symbol exclusion in keyof StringIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source StringIndex declaration determines whether the authored symbol domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _StringIndexHasNoSymbolDomain = Assert<
  symbol extends keyof StringIndex ? false : true
>;
/**
 * Pins typeof explicitSymbol membership in keyof ExplicitSymbolMember.
 *
 * @evidence contracts/testing.md#behavioral-verification This compile-time Assert requires the conditional keyof premise to resolve to true; it supplies a fixture premise rather than a runtime verdict.
 * @evidence contracts/testing.md#independent-expectations The source ExplicitSymbolMember declaration determines whether the authored typeof explicitSymbol domain is present independently of typia metadata.
 * @evidence contracts/testing.md#distinguishing-cases The neighboring symbol/branded/string/explicit-member premises distinguish string and number domains from symbol domains; this alias checks only its named relation.
 * @evidence contracts/testing.md#execution-ownership Native project compilation checks this alias; test_native_symbol_index_domain owns subsequent predicate and schema observations.
 */
export type _ExplicitSymbolMemberIsPresent = Assert<
  typeof explicitSymbol extends keyof ExplicitSymbolMember ? true : false
>;

const isSymbolIndex = typia.createIs<SymbolIndex>();
const isBrandedSymbolIndex = typia.createIs<BrandedSymbolIndex>();
const isPlainObject = typia.createIs<PlainObject>();
const isStringIndex = typia.createIs<StringIndex>();
const isExplicitSymbolMember = typia.createIs<ExplicitSymbolMember>();
const schemas =
  typia.json.schemas<
    [
      SymbolIndex,
      BrandedSymbolIndex,
      PlainObject,
      StringIndex,
      ExplicitSymbolMember,
    ]
  >();
const fixture = {
  isSymbolIndex,
  isBrandedSymbolIndex,
  isPlainObject,
  isStringIndex,
  isExplicitSymbolMember,
  schemas,
};

/**
 * Verifies symbol index domain in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original symbolIndexDomainSource
 * declarations; the former symbolIndexDomainRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: symbol index plain;
 * symbol index validates named properties; plain object ignores a string extra;
 * plain object validates named properties; string index accepts matching extra;
 * string index rejects mismatching extra.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from symbolIndexDomainRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Retained TypeScript keyof constraints establish that symbol-only indices add no string/number domain. Predicate inputs distinguish ignored surplus keys from a genuine string index that checks their values; authored schema expectations distinguish additionalProperties false from a string schema.
 * @evidence contracts/testing.md#distinguishing-cases Preserves symbol index plain; symbol index validates named properties; plain object ignores a string extra; plain object validates named properties; string index accepts matching extra; string index rejects mismatching extra; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_symbol_index_domain in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed symbolIndexDomainSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/symbol_index_domain_transform_test.go symbolIndexDomainRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_symbol_index_domain = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const failures: any = [];
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      failures.push(
        label +
          ": expected " +
          JSON.stringify(expected) +
          " but got " +
          JSON.stringify(actual),
      );
    }
  };

  expect("symbol index plain", mod.isSymbolIndex({ name: "x" }), true);
  expect(
    "symbol index ignores a numeric string extra",
    mod.isSymbolIndex({ name: "x", extra: 1 }),
    true,
  );
  expect(
    "symbol index ignores a string extra",
    mod.isSymbolIndex({ name: "x", extra: "unrelated" }),
    true,
  );
  expect(
    "symbol index ignores a matching symbol value",
    mod.isSymbolIndex({ name: "x", [Symbol("key")]: 1 }),
    true,
  );
  expect(
    "symbol index ignores a non-matching symbol value",
    mod.isSymbolIndex({ name: "x", [Symbol("key")]: "outside-json-shape" }),
    true,
  );
  expect(
    "symbol index validates named properties",
    mod.isSymbolIndex({ name: 1 }),
    false,
  );

  expect(
    "branded symbol index plain",
    mod.isBrandedSymbolIndex({ name: "x" }),
    true,
  );
  expect(
    "branded symbol index ignores a string extra",
    mod.isBrandedSymbolIndex({ name: "x", extra: "unrelated" }),
    true,
  );
  expect(
    "branded symbol index ignores a matching symbol value",
    mod.isBrandedSymbolIndex({ name: "x", [Symbol("key")]: 1 }),
    true,
  );
  expect(
    "branded symbol index ignores a non-matching symbol value",
    mod.isBrandedSymbolIndex({
      name: "x",
      [Symbol("key")]: "outside-json-shape",
    }),
    true,
  );
  expect(
    "branded symbol index validates named properties",
    mod.isBrandedSymbolIndex({ name: 1 }),
    false,
  );

  expect(
    "plain object ignores a string extra",
    mod.isPlainObject({ name: "x", extra: 1 }),
    true,
  );
  expect(
    "plain object validates named properties",
    mod.isPlainObject({ name: 1 }),
    false,
  );

  expect(
    "string index accepts matching extra",
    mod.isStringIndex({ name: "x", extra: "ok" }),
    true,
  );
  expect(
    "string index rejects mismatching extra",
    mod.isStringIndex({ name: "x", extra: 1 }),
    false,
  );

  expect(
    "explicit symbol member remains outside the JSON shape",
    mod.isExplicitSymbolMember({ name: "x", [Symbol("member")]: "ignored" }),
    true,
  );
  expect(
    "explicit symbol member validates named properties",
    mod.isExplicitSymbolMember({ name: 1 }),
    false,
  );

  const schemas: any = mod.schemas.components.schemas;
  const plain: any = {
    type: "object",
    properties: { name: { type: "string" } },
    required: ["name"],
    additionalProperties: false,
  };
  const stringIndex: any = {
    type: "object",
    properties: { name: { type: "string" } },
    required: ["name"],
    additionalProperties: { type: "string" },
  };
  expect(
    "plain object exact schema",
    JSON.stringify(schemas.PlainObject),
    JSON.stringify(plain),
  );
  expect(
    "symbol index exact schema",
    JSON.stringify(schemas.SymbolIndex),
    JSON.stringify(plain),
  );
  expect(
    "branded symbol index exact schema",
    JSON.stringify(schemas.BrandedSymbolIndex),
    JSON.stringify(plain),
  );
  expect(
    "explicit symbol member exact schema",
    JSON.stringify(schemas.ExplicitSymbolMember),
    JSON.stringify(plain),
  );
  expect(
    "string index exact schema",
    JSON.stringify(schemas.StringIndex),
    JSON.stringify(stringIndex),
  );
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
};
