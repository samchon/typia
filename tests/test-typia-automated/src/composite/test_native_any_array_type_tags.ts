import typia, { tags } from "typia";

type ContainsStatus = tags.TagBase<{
  kind: "containsStatus";
  target: "array";
  value: undefined;
  validate: '$input.some((elem) => elem === "SUCCESS" || elem === "FAILURE")';
}>;

// The issue #1933 case: tags on an unknown-element array must keep firing.
const validateTagged = typia.createValidate<
  unknown[] & tags.MinItems<2> & ContainsStatus
>();
const isTagged = typia.createIs<
  unknown[] & tags.MinItems<2> & ContainsStatus
>();

// Control: untagged any-element arrays keep accepting everything.
const validatePlainAny = typia.createValidate<any[]>();

// Control: the same tags on a concrete element type behave identically.
const validateConcrete = typia.createValidate<
  string[] & tags.MinItems<2> & ContainsStatus
>();

// Union branch: a tagged any-element array beside another array variant. The
// wrapper predicate participates in complete-branch selection (#2040).
const validateUnion = typia.createValidate<{
  list: (unknown[] & tags.MinItems<2>) | string[];
}>();
const validateUnionReversed = typia.createValidate<{
  list: string[] | (unknown[] & tags.MinItems<2>);
}>();
const isUnion = typia.createIs<{
  list: (unknown[] & tags.MinItems<2>) | string[];
}>();
const assertUnion = typia.createAssert<{
  list: (unknown[] & tags.MinItems<2>) | string[];
}>();
const equalsUnion = typia.createEquals<{
  list: (unknown[] & tags.MinItems<2>) | string[];
}>();
const validateTupleUnion = typia.createValidate<{
  list: (unknown[] & tags.MinItems<2>) | [number];
}>();
const validateTaggedAlternatives = typia.createValidate<{
  list: (unknown[] & tags.MinItems<2>) | (string[] & tags.MaxItems<1>);
}>();
const stringifyUnion = typia.json.createValidateStringify<{
  list: (unknown[] & tags.MinItems<2>) | string[];
}>();
const schemaUnion =
  typia.json.schemas<[(unknown[] & tags.MinItems<2>) | string[]]>();
const fixture = {
  validateTagged,
  isTagged,
  validatePlainAny,
  validateConcrete,
  validateUnion,
  validateUnionReversed,
  isUnion,
  assertUnion,
  equalsUnion,
  validateTupleUnion,
  validateTaggedAlternatives,
  stringifyUnion,
  schemaUnion,
};

/**
 * Verifies any array type tags in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original anyArrayTypeTagsSource
 * declarations; the former anyArrayTypeTagsRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: tagged valid; tagged
 * valid mixed; tagged too short; tagged no status; tagged non-array; plain any
 * empty.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from anyArrayTypeTagsRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Array length and the authored SUCCESS/FAILURE membership predicate establish acceptance independently; union acceptance requires at least one complete branch. The schema assertion only pins MinItems retention, not the whole schema.
 * @evidence contracts/testing.md#distinguishing-cases Tagged unknown arrays distinguish minimum length, custom status membership and non-array rejection from ordinary mixed-element acceptance. Untagged any arrays accept empty/mixed values but reject non-arrays. Concrete strings retain tag behavior; both union orders, tuple and tagged alternatives require a complete branch. is/equals/assert/validateStringify check adjacent accepting/rejecting unions, and schema output retains MinItems without claiming every schema field.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_any_array_type_tags in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed anyArrayTypeTagsSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/any_array_type_tags_transform_test.go anyArrayTypeTagsRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_any_array_type_tags = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expectSuccess: any = (label: any, result: any): any => {
    if (result.success !== true) {
      throw new Error(
        label + " unexpectedly failed: " + JSON.stringify(result.errors),
      );
    }
  };
  const expectFailure: any = (
    label: any,
    result: any,
    expectedFragment: any,
  ): any => {
    if (result.success !== false) {
      throw new Error(label + " unexpectedly passed");
    }
    if (
      expectedFragment !== undefined &&
      result.errors.every(
        (error: any): any =>
          error.expected.includes(expectedFragment) === false,
      )
    ) {
      throw new Error(
        label +
          " did not report " +
          expectedFragment +
          ": " +
          JSON.stringify(result.errors),
      );
    }
  };

  // 1. Tagged unknown[]: both tags enforced, element contents free.
  expectSuccess("tagged valid", mod.validateTagged(["anything", "SUCCESS"]));
  expectSuccess(
    "tagged valid mixed",
    mod.validateTagged([1, { x: true }, "FAILURE"]),
  );
  expectFailure(
    "tagged too short",
    mod.validateTagged(["SUCCESS"]),
    "MinItems<2>",
  );
  expectFailure(
    "tagged no status",
    mod.validateTagged(["a", "b"]),
    "ContainsStatus",
  );
  expectFailure("tagged non-array", mod.validateTagged("nope"));
  if (mod.isTagged(["a", "b"]) !== false) {
    throw new Error("is accepted an array violating the custom predicate");
  }
  if (mod.isTagged(["a", "SUCCESS"]) !== true) {
    throw new Error("is rejected a valid tagged array");
  }

  // 2. Untagged any[]: the wholesale skip must survive.
  expectSuccess("plain any empty", mod.validatePlainAny([]));
  expectSuccess(
    "plain any mixed",
    mod.validatePlainAny([1, "x", null, undefined]),
  );
  expectFailure("plain any non-array", mod.validatePlainAny({}));

  // 3. Concrete element control behaves identically for the shared cases.
  expectFailure(
    "concrete too short",
    mod.validateConcrete(["SUCCESS"]),
    "MinItems<2>",
  );
  expectFailure(
    "concrete no status",
    mod.validateConcrete(["a", "b"]),
    "ContainsStatus",
  );
  expectSuccess("concrete valid", mod.validateConcrete(["a", "SUCCESS"]));

  // 4. Complete branches backtrack across wrapper predicates and element types.
  expectSuccess("union via tagged any", mod.validateUnion({ list: [1, 2] }));
  expectSuccess(
    "union via string branch",
    mod.validateUnion({ list: ["solo"] }),
  );
  expectFailure(
    "union no valid branch",
    mod.validateUnion({ list: [1] }),
    "MinItems<2>",
  );
  expectSuccess(
    "reversed union via tagged any",
    mod.validateUnionReversed({ list: [1, 2] }),
  );
  expectSuccess(
    "reversed union via string branch",
    mod.validateUnionReversed({ list: ["solo"] }),
  );
  expectFailure(
    "reversed union no valid branch",
    mod.validateUnionReversed({ list: [1] }),
    "MinItems<2>",
  );
  if (
    mod.isUnion({ list: [1] }) !== false ||
    mod.isUnion({ list: [1, 2] }) !== true
  ) {
    throw new Error("is did not honor the complete tagged union branches");
  }
  if (
    mod.equalsUnion({ list: [1] }) !== false ||
    mod.equalsUnion({ list: ["solo"] }) !== true
  ) {
    throw new Error("equals did not honor the complete tagged union branches");
  }
  let asserted: any = false;
  try {
    mod.assertUnion({ list: [1] });
  } catch (error: any) {
    asserted = String(error && error.message).includes("MinItems<2>");
  }
  if (asserted !== true) {
    throw new Error("assert did not attribute the failed wrapper tag");
  }

  expectSuccess("tuple branch", mod.validateTupleUnion({ list: [1] }));
  expectSuccess(
    "tuple union tagged any",
    mod.validateTupleUnion({ list: [1, 2] }),
  );
  expectSuccess(
    "tagged alternative string",
    mod.validateTaggedAlternatives({ list: ["solo"] }),
  );
  expectSuccess(
    "tagged alternative any",
    mod.validateTaggedAlternatives({ list: [1, 2] }),
  );
  expectSuccess(
    "tagged alternative empty",
    mod.validateTaggedAlternatives({ list: [] }),
  );
  expectFailure(
    "tagged alternatives reject",
    mod.validateTaggedAlternatives({ list: [1] }),
    "MinItems<2>",
  );

  const stringified: any = mod.stringifyUnion({ list: ["solo"] });
  if (
    stringified.success !== true ||
    JSON.parse(stringified.data).list[0] !== "solo"
  ) {
    throw new Error(
      "validated stringify rejected a later valid branch: " +
        JSON.stringify(stringified),
    );
  }
  expectFailure(
    "validated stringify no valid branch",
    mod.stringifyUnion({ list: [1] }),
    "MinItems<2>",
  );
  const unionSchema: any = JSON.stringify(mod.schemaUnion);
  if (unionSchema.includes('"minItems":2') === false) {
    throw new Error("array union schema lost MinItems: " + unionSchema);
  }
};
