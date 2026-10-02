import typia, { tags } from "typia";

type Percent = `${number & tags.Minimum<0> & tags.Maximum<100>}%`;
type IntStr = `${number & tags.Type<"int32">}`;
type Check =
  `CHECK${string & tags.MinLength<32> & tags.MaxLength<32> & tags.Pattern<"^[0-9a-fA-F]+$">}`;
type Range = `${number & tags.Minimum<0>}-${number & tags.Maximum<100>}`;
type Unit =
  | `${number & tags.Minimum<100>}px`
  | `${number & tags.Maximum<10>}em`;
type Combined = `${number & tags.Minimum<0> & tags.Maximum<99>}px` &
  tags.MaxLength<3>;
type Multiline = `L:${string & tags.MinLength<4>}`;
type BigRange = `#${bigint & tags.Minimum<10n> & tags.Maximum<20n>}`;
type BigExcl = `#${bigint & tags.Minimum<0n> & tags.Exclude<[5n]>}`;
type Adjacent = `${string}${number & tags.Minimum<10>}`;
type Infix = `a${string & tags.MaxLength<2>}b`;
type NonAdj = `${string}X${string & tags.MinLength<3>}`;
type StrNum = `${string & tags.MaxLength<2>}-${number}`;
type NumStr = `${number & tags.Maximum<9>}-${string & tags.MinLength<2>}`;
type Dec = `${number & tags.Maximum<1.2>}.${number}`;
type BigDot = `${bigint}.${number & tags.Minimum<5>}`;
type Triple =
  `${string & tags.MaxLength<2>}${string & tags.MinLength<2>}${number & tags.Minimum<10>}`;
type AmbiguousUnion = Adjacent | NonAdj;
interface DynKey {
  [key: `slot${number & tags.Minimum<0> & tags.Maximum<9>}`]: string;
}
interface AmbiguousDynKey {
  [key: `${string}${number & tags.Minimum<10>}`]: string;
}

const isPercent = typia.createIs<Percent>();
const validatePercent = typia.createValidate<Percent>();
const isIntStr = typia.createIs<IntStr>();
const isCheck = typia.createIs<Check>();
const isRange = typia.createIs<Range>();
const isUnit = typia.createIs<Unit>();
const isCombined = typia.createIs<Combined>();
const isMultiline = typia.createIs<Multiline>();
const isBigRange = typia.createIs<BigRange>();
const isBigExcl = typia.createIs<BigExcl>();
const isAdjacent = typia.createIs<Adjacent>();
const validateAdjacent = typia.createValidate<Adjacent>();
const assertAdjacent = typia.createAssert<Adjacent>();
const isInfix = typia.createIs<Infix>();
const isNonAdj = typia.createIs<NonAdj>();
const isStrNum = typia.createIs<StrNum>();
const isNumStr = typia.createIs<NumStr>();
const isDec = typia.createIs<Dec>();
const isBigDot = typia.createIs<BigDot>();
const isTriple = typia.createIs<Triple>();
const isAmbiguousUnion = typia.createIs<AmbiguousUnion>();
const equalsDynKey = typia.createEquals<DynKey>();
const equalsAmbiguousDynKey = typia.createEquals<AmbiguousDynKey>();
const randomPercent = typia.createRandom<Percent>();
const randomAdjacent = typia.createRandom<Adjacent>();
const stringifyAdjacent = typia.json.createValidateStringify<{
  value: Adjacent;
}>();
const schemaAdjacent = typia.json.schemas<[Adjacent]>();
const fixture = {
  isPercent,
  validatePercent,
  isIntStr,
  isCheck,
  isRange,
  isUnit,
  isCombined,
  isMultiline,
  isBigRange,
  isBigExcl,
  isAdjacent,
  validateAdjacent,
  assertAdjacent,
  isInfix,
  isNonAdj,
  isStrNum,
  isNumStr,
  isDec,
  isBigDot,
  isTriple,
  isAmbiguousUnion,
  equalsDynKey,
  equalsAmbiguousDynKey,
  randomPercent,
  randomAdjacent,
  stringifyAdjacent,
  schemaAdjacent,
};

/**
 * Verifies template interpolation type tags in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * templateInterpolationTypeTagsSource declarations; the former
 * templateInterpolationTypeTagsRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: percent 50; percent 0; percent
 * 100; percent 33.5; percent -1; percent 150.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from templateInterpolationTypeTagsRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The declared placeholder numeric bounds and template splits determine acceptance, including existential adjacent-placeholder partitions. Handwritten invalid splits and dynamic keys establish negatives; random-to-is assertions remain correlated, and the schema check only pins intentional tag omission.
 * @evidence contracts/testing.md#distinguishing-cases Preserves percent 50; percent 0; percent 100; percent 33.5; percent -1; percent 150; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_template_interpolation_type_tags in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed templateInterpolationTypeTagsSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/template_interpolation_type_tags_transform_test.go templateInterpolationTypeTagsRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_template_interpolation_type_tags = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const hex32: any = "0123456789abcdef0123456789abcdef";

  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + " but got " + actual);
    }
  };

  // #1965 — numeric range inside the interpolation.
  expect("percent 50", mod.isPercent("50%"), true);
  expect("percent 0", mod.isPercent("0%"), true);
  expect("percent 100", mod.isPercent("100%"), true);
  expect("percent 33.5", mod.isPercent("33.5%"), true);
  expect("percent -1", mod.isPercent("-1%"), false);
  expect("percent 150", mod.isPercent("150%"), false);
  // The base number pattern matches "1e3", but Maximum<100> rejects 1000.
  expect("percent 1e3", mod.isPercent("1e3%"), false);
  expect("percent missing suffix", mod.isPercent("50"), false);
  expect("percent non-number", mod.isPercent("abc%"), false);

  // #1175 — int32 tag inside the interpolation must reject decimals/overflow.
  expect("int 42", mod.isIntStr("42"), true);
  expect("int -5", mod.isIntStr("-5"), true);
  expect("int 0.1", mod.isIntStr("0.1"), false);
  expect("int overflow", mod.isIntStr("2147483648"), false);

  // #1202 — string length + pattern inside the interpolation.
  expect("check valid", mod.isCheck("CHECK" + hex32), true);
  expect("check short", mod.isCheck("CHECK" + hex32.slice(1)), false);
  expect("check long", mod.isCheck("CHECK" + hex32 + "0"), false);
  expect("check non-hex", mod.isCheck("CHECK" + "g".repeat(32)), false);
  expect("check nomatch", mod.isCheck("nomatch"), false);

  // Two constrained placeholders — capture indices [1] and [2] must stay distinct.
  expect("range ok", mod.isRange("5-50"), true);
  expect("range min violated", mod.isRange("-1-50"), false);
  expect("range max violated", mod.isRange("5-150"), false);

  // Union of differently-tagged templates — the inline path per member.
  expect("unit px ok", mod.isUnit("150px"), true);
  expect("unit px violated", mod.isUnit("50px"), false);
  expect("unit em ok", mod.isUnit("5em"), true);
  expect("unit em violated", mod.isUnit("50em"), false);

  // Whole-string tag (#1635) composed with an interpolation tag (#1968).
  expect("combined ok", mod.isCombined("9px"), true);
  expect("combined length violated", mod.isCombined("99px"), false);
  expect("combined range violated", mod.isCombined("-1px"), false);

  // A string placeholder spanning a newline: the captured value must include the
  // line break, so MinLength<4> sees the whole "ab\ncd" (5 chars), not just "ab".
  expect("multiline spans newline", mod.isMultiline("L:ab\ncd"), true);
  expect("multiline too short", mod.isMultiline("L:x"), false);

  // A bigint placeholder is captured as an integer only, so BigInt(...) is safe:
  // an in-range integer passes, out-of-range fails, and a decimal string is
  // rejected structurally (never reaching a throwing BigInt(".5") call).
  expect("bigint in range", mod.isBigRange("#15"), true);
  expect("bigint below", mod.isBigRange("#5"), false);
  expect("bigint above", mod.isBigRange("#25"), false);
  expect("bigint decimal rejected", mod.isBigRange("#15.5"), false);
  expect("bigint non-digit rejected", mod.isBigRange("#abc"), false);

  // bigint Exclude exercises check_exclude_literal's BigInt-literal branch.
  expect("bigint excluded value", mod.isBigExcl("#5"), false);
  expect("bigint allowed value", mod.isBigExcl("#3"), true);
  expect("bigint exclude negative", mod.isBigExcl("#-1"), false);

  // Adjacent variable-width placeholders accept a non-greedy split when it is the
  // split that satisfies the number tag.
  expect("adjacent placeholders backtrack", mod.isAdjacent("abc123"), true);
  expect("adjacent placeholders edge split", mod.isAdjacent("123"), true);
  expect("adjacent placeholders no valid split", mod.isAdjacent("abc9"), false);
  expect(
    "adjacent placeholders structural failure",
    mod.isAdjacent("abc"),
    false,
  );
  expect(
    "adjacent placeholders long invalid input",
    mod.isAdjacent("x".repeat(2048) + "9"),
    false,
  );

  // A sole string fenced by literals is enforced: the ^/$ anchors pin "a" and the
  // final "b", so the split string="XbY" (length 3) is unique and exceeds
  // MaxLength<2>, while "aXb" (string="X", length 1) is in range.
  expect(
    "sole string fenced by literals, too long",
    mod.isInfix("aXbYb"),
    false,
  );
  expect("sole string fenced by literals, in range", mod.isInfix("aXb"), true);

  // A repeated literal fence tries each split until the tagged suffix is valid.
  expect("string sibling backtracks", mod.isNonAdj("aXbXcd"), true);
  expect("string sibling no valid split", mod.isNonAdj("aXbc"), false);

  // A separator that can also occur in an exponent is tried at each position.
  expect("strnum string-first backtracks", mod.isStrNum("xy-1e-9"), true);
  expect("strnum no valid bounded prefix", mod.isStrNum("toolong-1"), false);

  // number-first: "-" is not number-extendable, so both placeholders are pinned
  // and enforced — number=50 > 9 fails, string="a" length 1 < 2 fails.
  expect("numstr ok", mod.isNumStr("5-ab"), true);
  expect("numstr number violated", mod.isNumStr("50-ab"), false);
  expect("numstr string violated", mod.isNumStr("5-a"), false);

  // A decimal point can be part of either number; any fully valid split passes.
  expect("dec decimal-separator backtracks", mod.isDec("1.9.0"), true);
  expect("dec no valid bounded first number", mod.isDec("2.0.3"), false);

  // A bigint/number mix keeps the bigint side integral while trying dot fences.
  expect("bigint-dot-number backtracks", mod.isBigDot("1.9.4"), true);
  expect("bigint-dot-number no valid suffix", mod.isBigDot("1.4.0"), false);
  expect("three adjacent placeholders backtrack", mod.isTriple("abcd12"), true);
  expect(
    "three adjacent placeholders no valid split",
    mod.isTriple("abcd9"),
    false,
  );
  expect(
    "ambiguous union adjacent branch",
    mod.isAmbiguousUnion("prefix123"),
    true,
  );
  expect("ambiguous union fenced branch", mod.isAmbiguousUnion("aXbXcd"), true);
  expect(
    "ambiguous union no valid branch",
    mod.isAmbiguousUnion("prefix9"),
    false,
  );

  const adjacentFailure: any = mod.validateAdjacent("abc9");
  if (
    adjacentFailure.success !== false ||
    adjacentFailure.errors.every(
      (error: any): any => error.expected.includes("Minimum<10>") === false,
    )
  ) {
    throw new Error(
      "ambiguous validate error should name Minimum<10>: " +
        JSON.stringify(adjacentFailure),
    );
  }
  let adjacentAsserted: any = false;
  try {
    mod.assertAdjacent("abc9");
  } catch (error: any) {
    adjacentAsserted = String(error && error.message).includes("Minimum<10>");
  }
  if (adjacentAsserted !== true) {
    throw new Error("ambiguous assert error should name Minimum<10>");
  }

  // A dynamic index key typed as a tagged-interpolation template (the
  // check_dynamic_key path): a key whose number violates the tag no longer
  // satisfies the index signature, so a strict equals rejects it.
  expect("dynkey in range", mod.equalsDynKey({ slot5: "x" }), true);
  expect(
    "dynkey both ends",
    mod.equalsDynKey({ slot0: "x", slot9: "y" }),
    true,
  );
  expect("dynkey out of range", mod.equalsDynKey({ slot50: "x" }), false);
  expect("dynkey non-number", mod.equalsDynKey({ slotABC: "x" }), false);
  expect(
    "ambiguous dynkey valid split",
    mod.equalsAmbiguousDynKey({ slot123: "x" }),
    true,
  );
  expect(
    "ambiguous dynkey invalid split",
    mod.equalsAmbiguousDynKey({ slot9: "x" }),
    false,
  );

  // validate must name the violated placeholder tag, not just the template.
  const tooBig: any = mod.validatePercent("150%");
  if (tooBig.success !== false) {
    throw new Error("validate should reject the out-of-range percent");
  }
  if (
    !tooBig.errors.some((e: any): any => e.expected.includes("Maximum<100>"))
  ) {
    throw new Error(
      "validate error should name Maximum<100>: " +
        JSON.stringify(tooBig.errors),
    );
  }
  if (mod.validatePercent("50%").success !== true) {
    throw new Error("validate should accept the in-range percent");
  }

  // random output must round-trip through the validator.
  const generator: any = {
    array: (closure: any, count: any): any => {
      const length: any = count ?? 3;
      return Array.from({ length }, (_: any, i: any): any => closure(i));
    },
  };
  for (let i: any = 0; i < 100; ++i) {
    const value: any = mod.randomPercent(generator);
    if (mod.isPercent(value) !== true) {
      throw new Error(
        "random percent did not round-trip: " + JSON.stringify(value),
      );
    }
  }
  for (let i: any = 0; i < 25; ++i) {
    const value: any = mod.randomAdjacent(generator);
    if (mod.isAdjacent(value) !== true) {
      throw new Error(
        "random adjacent template did not round-trip: " + JSON.stringify(value),
      );
    }
  }
  const stringifiedAdjacent: any = mod.stringifyAdjacent({
    value: "prefix123",
  });
  if (
    stringifiedAdjacent.success !== true ||
    JSON.parse(stringifiedAdjacent.data).value !== "prefix123"
  ) {
    throw new Error(
      "validated stringify rejected an existentially valid split",
    );
  }
  const invalidStringifiedAdjacent: any = mod.stringifyAdjacent({
    value: "prefix9",
  });
  if (
    invalidStringifiedAdjacent.success !== false ||
    invalidStringifiedAdjacent.errors.every(
      (error: any): any => error.expected.includes("Minimum<10>") === false,
    )
  ) {
    throw new Error(
      "validated stringify did not preserve the ambiguous placeholder tag diagnostic",
    );
  }
  const adjacentSchema: any = JSON.stringify(mod.schemaAdjacent);
  if (adjacentSchema.includes("Minimum<10>")) {
    throw new Error(
      "template interpolation tags must remain intentionally absent from JSON Schema",
    );
  }
};
