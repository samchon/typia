import typia from "typia";

// The issue #1667 playground shape: nested inline type literals.
const validateNested = typia.createValidate<{
  property: { property: string };
}>();

// Named interfaces must keep reporting their identifier names.
interface INamed {
  value: string;
}
const validateNamed = typia.createValidate<{ child: INamed }>();

// Inline element types of arrays previously surfaced by synthetic names.
const validateInlineArray = typia.createValidate<{
  list: { value: number }[];
}>();

// Inline unions previously surfaced as a pair of synthetic names.
const validateInlineUnion = typia.createValidate<{
  union: { kind: "a"; a: string } | { kind: "b"; b: number };
}>();

// Containers of inline values previously wrapped the synthetic names.
const validateInlineSet = typia.createValidate<{
  entries: Set<{ flag: boolean }>;
}>();

// Top-level inline types must render structurally at the "$input" root.
const validateTopLevel = typia.createValidate<{ id: string }>();

// Tuples of inline objects must render each element structurally.
const validateInlineTuple = typia.createValidate<{
  pair: [{ a: string }, { b: number }];
}>();

// Retain the original schema call as a transform fixture; the runtime runner
// does not inspect its schema component keys or inline property.
const schemas = typia.json.schemas<[{ inline: { id: string } }]>();
const fixture = {
  validateNested,
  validateNamed,
  validateInlineArray,
  validateInlineUnion,
  validateInlineSet,
  validateTopLevel,
  validateInlineTuple,
  schemas,
};

/**
 * Verifies inline type display name in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * inlineTypeDisplayNameSource declarations; the former
 * inlineTypeDisplayNameRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from inlineTypeDisplayNameRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored malformed inputs require failed validation reports with the literal inline or named expected strings and property paths. Array, union, Set and tuple cases prevent leaking the internal __type spelling.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_inline_type_display_name in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed inlineTypeDisplayNameSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/inline_type_display_name_transform_test.go inlineTypeDisplayNameRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_inline_type_display_name = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expectError: any = (
    label: any,
    result: any,
    path: any,
    expected: any,
  ): any => {
    if (result.success !== false) {
      throw new Error(label + " unexpectedly passed");
    }
    const entry: any = result.errors.find(
      (error: any): any => error.path === path,
    );
    if (entry === undefined) {
      throw new Error(
        label +
          " did not report " +
          path +
          ": " +
          JSON.stringify(result.errors),
      );
    }
    if (entry.expected !== expected) {
      throw new Error(
        label +
          " reported wrong expected string.\n  wanted: " +
          expected +
          "\n  actual: " +
          entry.expected,
      );
    }
  };

  const forbidAnonymous: any = (label: any, result: any): any => {
    for (const entry of result.errors) {
      if (entry.expected.includes("__type")) {
        throw new Error(
          label + " leaked an anonymous identifier: " + JSON.stringify(entry),
        );
      }
    }
  };

  // 1. Nested inline object: the inner property is undefined.
  const nested: any = mod.validateNested({ property: { property: undefined } });
  expectError(
    "nested inline (missing leaf)",
    nested,
    "$input.property.property",
    "string",
  );
  forbidAnonymous("nested inline (missing leaf)", nested);

  // 2. Nested inline object: the intermediate object is undefined. The expected
  //    string must render the structural form, not __type.
  const intermediate: any = mod.validateNested({ property: undefined });
  expectError(
    "nested inline (missing branch)",
    intermediate,
    "$input.property",
    "{ property: string; }",
  );
  forbidAnonymous("nested inline (missing branch)", intermediate);

  // 3. Named interfaces keep their identifier names.
  const named: any = mod.validateNamed({ child: undefined });
  expectError("named interface", named, "$input.child", "INamed");

  // 4. Inline array element type.
  const arrayElement: any = mod.validateInlineArray({ list: [{ value: "1" }] });
  expectError(
    "inline array (element violation)",
    arrayElement,
    "$input.list[0].value",
    "number",
  );
  forbidAnonymous("inline array (element violation)", arrayElement);

  const arrayBranch: any = mod.validateInlineArray({ list: undefined });
  expectError(
    "inline array (missing list)",
    arrayBranch,
    "$input.list",
    "{ value: number; }[]",
  );
  forbidAnonymous("inline array (missing list)", arrayBranch);

  // 5. Inline union: both branches must render structurally.
  const union: any = mod.validateInlineUnion({ union: { kind: "c" } });
  if (union.success !== false) {
    throw new Error("inline union unexpectedly passed");
  }
  forbidAnonymous("inline union", union);

  const unionMissing: any = mod.validateInlineUnion({ union: undefined });
  if (unionMissing.success !== false) {
    throw new Error("inline union (missing) unexpectedly passed");
  }
  const unionEntry: any = unionMissing.errors.find(
    (error: any): any => error.path === "$input.union",
  );
  if (unionEntry === undefined) {
    throw new Error(
      "inline union (missing) did not report $input.union: " +
        JSON.stringify(unionMissing.errors),
    );
  }
  if (unionEntry.expected.includes("__type")) {
    throw new Error(
      "inline union (missing) leaked an anonymous identifier: " +
        JSON.stringify(unionEntry),
    );
  }
  if (
    !unionEntry.expected.includes('{ kind: "a"; a: string; }') ||
    !unionEntry.expected.includes('{ kind: "b"; b: number; }')
  ) {
    throw new Error(
      "inline union (missing) lost a structural branch: " +
        JSON.stringify(unionEntry),
    );
  }

  // 6. Set of inline values.
  const set: any = mod.validateInlineSet({ entries: undefined });
  expectError(
    "inline Set (missing entries)",
    set,
    "$input.entries",
    "Set<{ flag: boolean; }>",
  );
  forbidAnonymous("inline Set (missing entries)", set);

  // 7. Top-level inline type.
  const topLevel: any = mod.validateTopLevel(null);
  expectError("top-level inline", topLevel, "$input", "{ id: string; }");
  forbidAnonymous("top-level inline", topLevel);

  // 8. Tuple of inline objects.
  const tupleElement: any = mod.validateInlineTuple({
    pair: [{ a: "x" }, { b: "1" }],
  });
  expectError(
    "inline tuple (element violation)",
    tupleElement,
    "$input.pair[1].b",
    "number",
  );
  forbidAnonymous("inline tuple (element violation)", tupleElement);

  const tupleMissing: any = mod.validateInlineTuple({ pair: undefined });
  expectError(
    "inline tuple (missing pair)",
    tupleMissing,
    "$input.pair",
    "[{ a: string; }, { b: number; }]",
  );
  forbidAnonymous("inline tuple (missing pair)", tupleMissing);
};
