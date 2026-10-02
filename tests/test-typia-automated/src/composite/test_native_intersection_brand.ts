import typia, { tags } from "typia";

declare const sym: unique symbol;
declare const sym2: unique symbol;

// Only the unambiguously-phantom markers are honored: a unique-symbol key (zod /
// type-fest / Effect brands) or an optional property. A required string-keyed
// property is real data and stays nonsensible (covered by the backstop test).
type SymbolString = string & { [sym]: "UserId" };
type OptionalString = string & { __brand?: "UserId" };
type SymbolNumber = number & { [sym]: "Age" };
type OptionalNumber = number & { __brand?: "Age" };

// A symbol marker is honored on a non-primitive base too — the genuinely new
// capability of #933: the array / tuple / native base is validated as itself.
type SymbolArray = string[] & { [sym]: "Tag" };
type SymbolTuple = [string, number] & { [sym]: "Tag" };
type SymbolDate = Date & { [sym]: "Tag" };

// A union / enum base carrying a phantom symbol brand validates as the bare
// union. TypeScript distributes (a | b) & Brand into (a & Brand) | (b & Brand),
// so each member is a prunable intersection; the brand must drop on every member
// rather than collapsing it to never (which would leave the union empty and
// vacuously accept everything).
type UnionSymbol = (string | number) & { [sym]: "Tag" };
enum Currency {
  KRW = "KRW",
  USD = "USD",
}
type EnumSymbol = Currency & { [sym]: "Tag" };

// Optional markers on array / tuple bases, and a typia tag on an object base —
// the accepted backstop rows whose soundness needs a runtime mirror (a build that
// merely succeeds cannot tell a correct validator from accept-everything).
type ArrayOptionalTag = string[] & { tag?: string };
type TupleOptionalTag = [string, number] & { tag?: string };
type ObjectTypiaTag = { a: string } & tags.JsonSchemaPlugin<{ "x-y": true }>;

// Multiple phantom markers on one base, and a nested intersection of two brands —
// exercising the recursive marker recognition.
type MultiBrand = string & { [sym]: "A" } & { z?: number };
type NestedBrand = (string & { [sym]: "A" }) & { [sym2]: "B" };

// A *validating* typia tag must still attach and ENFORCE after the brand is
// stripped (primitive base) and on an array base — proving the tag landed on the
// surviving bucket, not just that it compiled.
type BrandMinLength = string & { [sym]: "A" } & tags.MinLength<3>;
type ArrayMinItems = string[] & tags.MinItems<1>;

const isSymbolString = typia.createIs<SymbolString>();
const isOptionalString = typia.createIs<OptionalString>();
const isSymbolNumber = typia.createIs<SymbolNumber>();
const isOptionalNumber = typia.createIs<OptionalNumber>();
const isSymbolArray = typia.createIs<SymbolArray>();
const isSymbolTuple = typia.createIs<SymbolTuple>();
const isSymbolDate = typia.createIs<SymbolDate>();
const isUnionSymbol = typia.createIs<UnionSymbol>();
const isEnumSymbol = typia.createIs<EnumSymbol>();
const isArrayOptionalTag = typia.createIs<ArrayOptionalTag>();
const isTupleOptionalTag = typia.createIs<TupleOptionalTag>();
const isObjectTypiaTag = typia.createIs<ObjectTypiaTag>();
const isMultiBrand = typia.createIs<MultiBrand>();
const isNestedBrand = typia.createIs<NestedBrand>();
const isBrandMinLength = typia.createIs<BrandMinLength>();
const isArrayMinItems = typia.createIs<ArrayMinItems>();

const validateSymbolString = typia.createValidate<SymbolString>();
const assertSymbolNumber = typia.createAssert<SymbolNumber>();

const schemaSymbolString = typia.json.schema<SymbolString>();
const schemaSymbolNumber = typia.json.schema<SymbolNumber>();
const schemaSymbolArray = typia.json.schema<SymbolArray>();
const fixture = {
  isSymbolString,
  isOptionalString,
  isSymbolNumber,
  isOptionalNumber,
  isSymbolArray,
  isSymbolTuple,
  isSymbolDate,
  isUnionSymbol,
  isEnumSymbol,
  isArrayOptionalTag,
  isTupleOptionalTag,
  isObjectTypiaTag,
  isMultiBrand,
  isNestedBrand,
  isBrandMinLength,
  isArrayMinItems,
  validateSymbolString,
  assertSymbolNumber,
  schemaSymbolString,
  schemaSymbolNumber,
  schemaSymbolArray,
};

/**
 * Verifies intersection brand in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original intersectionBrandSource
 * declarations; the former intersectionBrandRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: symbolString accepts
 * string; symbolString rejects number; optionalString accepts string;
 * optionalString rejects number; symbolNumber accepts number; symbolNumber
 * rejects string.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from intersectionBrandRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Optional phantom brand markers preserve the primitive, array or tuple base; required contradictory markers and actual validating tags retain their own decisions. Handwritten primitive values and minimum-length/item boundaries determine the verdicts and primitive schema types.
 * @evidence contracts/testing.md#distinguishing-cases Preserves symbolString accepts string; symbolString rejects number; optionalString accepts string; optionalString rejects number; symbolNumber accepts number; symbolNumber rejects string; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_intersection_brand in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed intersectionBrandSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/intersection_brand_transform_test.go intersectionBrandRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_intersection_brand = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const check: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(
        label +
          ": expected " +
          JSON.stringify(expected) +
          ", got " +
          JSON.stringify(actual),
      );
    }
  };

  // Every honored brand validates as its bare primitive.
  check("symbolString accepts string", mod.isSymbolString("abc"), true);
  check("symbolString rejects number", mod.isSymbolString(123), false);
  check("optionalString accepts string", mod.isOptionalString("abc"), true);
  check("optionalString rejects number", mod.isOptionalString(123), false);
  check("symbolNumber accepts number", mod.isSymbolNumber(42), true);
  check("symbolNumber rejects string", mod.isSymbolNumber("x"), false);
  check("optionalNumber accepts number", mod.isOptionalNumber(42), true);
  check("optionalNumber rejects string", mod.isOptionalNumber("x"), false);

  // Symbol marker on array / tuple bases (the net-new #933 capability) validates
  // as the bare container, not as an object carrying the symbol.
  check("symbolArray accepts strings", mod.isSymbolArray(["a", "b"]), true);
  check("symbolArray accepts empty", mod.isSymbolArray([]), true);
  check("symbolArray rejects numbers", mod.isSymbolArray([1, 2]), false);
  check("symbolArray rejects non-array", mod.isSymbolArray("x"), false);
  check("symbolTuple accepts pair", mod.isSymbolTuple(["a", 1]), true);
  check("symbolTuple rejects short", mod.isSymbolTuple(["a"]), false);
  check("symbolTuple rejects wrong slot", mod.isSymbolTuple([1, "a"]), false);
  check("symbolDate accepts Date", mod.isSymbolDate(new Date()), true);
  check("symbolDate rejects string", mod.isSymbolDate("2020-01-01"), false);
  check("symbolDate rejects plain object", mod.isSymbolDate({}), false);

  // A union / enum base intersected with a phantom symbol brand validates as the
  // bare union — never accept-everything. Each distributed member drops the brand.
  check("unionSymbol accepts string", mod.isUnionSymbol("abc"), true);
  check("unionSymbol accepts number", mod.isUnionSymbol(42), true);
  check("unionSymbol rejects boolean", mod.isUnionSymbol(true), false);
  check("unionSymbol rejects object", mod.isUnionSymbol({}), false);
  check("unionSymbol rejects array", mod.isUnionSymbol([1]), false);
  check("enumSymbol accepts member", mod.isEnumSymbol("KRW"), true);
  check("enumSymbol accepts other member", mod.isEnumSymbol("USD"), true);
  check("enumSymbol rejects non-member", mod.isEnumSymbol("JPY"), false);
  check("enumSymbol rejects number", mod.isEnumSymbol(1), false);

  // Optional marker on array / tuple bases strips to the bare container.
  check(
    "arrayOptionalTag accepts strings",
    mod.isArrayOptionalTag(["a", "b"]),
    true,
  );
  check("arrayOptionalTag accepts empty", mod.isArrayOptionalTag([]), true);
  check("arrayOptionalTag rejects numbers", mod.isArrayOptionalTag([1]), false);
  check(
    "arrayOptionalTag rejects non-array",
    mod.isArrayOptionalTag("x"),
    false,
  );
  check(
    "tupleOptionalTag accepts pair",
    mod.isTupleOptionalTag(["a", 1]),
    true,
  );
  check("tupleOptionalTag rejects short", mod.isTupleOptionalTag(["a"]), false);
  check(
    "tupleOptionalTag rejects swapped",
    mod.isTupleOptionalTag([1, "a"]),
    false,
  );
  // typia tag on an object base keeps validating the object's real property.
  check(
    "objectTypiaTag accepts object",
    mod.isObjectTypiaTag({ a: "s" }),
    true,
  );
  check(
    "objectTypiaTag rejects wrong type",
    mod.isObjectTypiaTag({ a: 1 }),
    false,
  );
  check("objectTypiaTag rejects missing", mod.isObjectTypiaTag({}), false);
  check("objectTypiaTag rejects non-object", mod.isObjectTypiaTag("x"), false);
  // Multiple / nested phantom markers all strip, leaving the bare base.
  check("multiBrand accepts string", mod.isMultiBrand("abc"), true);
  check("multiBrand rejects number", mod.isMultiBrand(1), false);
  check("nestedBrand accepts string", mod.isNestedBrand("abc"), true);
  check("nestedBrand rejects number", mod.isNestedBrand(1), false);
  check("nestedBrand rejects object", mod.isNestedBrand({}), false);
  // A validating tag enforces at runtime after the brand strips / on an array base.
  check("brandMinLength accepts len3", mod.isBrandMinLength("abc"), true);
  check("brandMinLength rejects len2", mod.isBrandMinLength("ab"), false);
  check("brandMinLength rejects number", mod.isBrandMinLength(1), false);
  check("arrayMinItems accepts non-empty", mod.isArrayMinItems(["a"]), true);
  check("arrayMinItems rejects empty", mod.isArrayMinItems([]), false);
  check("arrayMinItems rejects numbers", mod.isArrayMinItems([1]), false);

  check(
    "validate symbolString success",
    mod.validateSymbolString("abc").success,
    true,
  );
  check(
    "validate symbolString failure",
    mod.validateSymbolString(123).success,
    false,
  );
  check("assert symbolNumber returns value", mod.assertSymbolNumber(7), 7);

  let threw: any = false;
  try {
    mod.assertSymbolNumber("x");
  } catch {
    threw = true;
  }
  check("assert symbolNumber throws on string", threw, true);

  // json.schema is the bare primitive — no brand property leaks in.
  const root: any = (unit: any): any => {
    let s: any = unit.schema;
    while (s && s.$ref) {
      s = unit.components.schemas[s.$ref.split("/").at(-1)];
    }
    return s;
  };
  const stringSchema: any = root(mod.schemaSymbolString);
  check("schema symbolString type", stringSchema.type, "string");
  if (
    "properties" in stringSchema ||
    "required" in stringSchema ||
    "allOf" in stringSchema
  ) {
    throw new Error(
      "brand schema leaked an object/brand shape: " +
        JSON.stringify(stringSchema),
    );
  }
  const numberSchema: any = root(mod.schemaSymbolNumber);
  check("schema symbolNumber type", numberSchema.type, "number");
  const arraySchema: any = root(mod.schemaSymbolArray);
  check("schema symbolArray type", arraySchema.type, "array");
  check("schema symbolArray items", arraySchema.items.type, "string");

  console.log("ok");
};
