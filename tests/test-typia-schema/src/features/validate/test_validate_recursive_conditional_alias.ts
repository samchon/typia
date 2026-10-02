import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { Primitive, tags } from "typia";

/**
 * Verifies a self-recursive conditional alias validates and names itself.
 *
 * `Primitive<T>` over `type Node = Date | Node[]` resolves to a union whose
 * array member's sole type argument is that very union, so the transformer's
 * name builders walked back into a type whose name was still being composed and
 * recursed until the plugin died of a stack overflow (#2331). The fix names
 * such a revisited type after its own symbol, so this pins both halves: the
 * type has to transform at all, and the name it settles on has to stay usable
 * as a schema component key rather than a structural dump of the elided
 * rendering.
 *
 * 1. Validate values against the recursive `Primitive<Node>` union.
 * 2. Read the emitted JSON schema and require the array component to reference
 *    itself under a bounded name.
 * 3. Compare against a named recursive union, which must keep validating and must
 *    still name its component from the declaration.
 *
 * @evidence contracts/testing.md#behavioral-verification Recursive conditional aliases transform, validate and retain usable schema names.
 * @evidence contracts/testing.md#independent-expectations Authored date/nested accepted and rejected inputs, exact failure path and explicit self-reference/date-time checks anchor behavior.
 * @evidence contracts/testing.md#distinguishing-cases Five accepted/five rejected inputs, bounded names, recursive array union and separate named-recursion positive/negative controls remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_validate_recursive_conditional_alias in the schema start suite under ttsx and the native plugin; the exported body owns these assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native type naming must terminate when revisiting a conditional union and feed consistent recursive validator/schema references.
 * @evidence contracts/e2e.md#shared-execution The suite project load and native artifact are reused with neighboring cases; no per-input process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and observed outputs are local to the case. The suite owns shared host lifetime; mutable data is not handed to another case and no cold cache behavior is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Five accepted/five rejected inputs, bounded names, recursive array union and separate named-recursion positive/negative controls remain. Source review preserves the executable matrix; final native execution is tracked separately.
 */
export const test_validate_recursive_conditional_alias = (): void => {
  type Node = Date | Node[];
  type Primitified = Primitive<Node>;

  const DATE = "2020-01-01T00:00:00.000Z";
  const accepted: unknown[] = [DATE, [], [DATE], [[[DATE]], []]];
  const rejected: unknown[] = ["nope", 1, null, [DATE, "nope"], [[[1]]]];
  for (const value of accepted)
    TestEquality.equals(
      `accepts ${JSON.stringify(value)}`,
      typia.is<Primitified>(value),
      true,
    );
  for (const value of rejected)
    TestEquality.equals(
      `rejects ${JSON.stringify(value)}`,
      typia.is<Primitified>(value),
      false,
    );

  const result = typia.validate<Primitified>([DATE, "nope"]);
  TestEquality.equals("validate reports failure", result.success, false);
  if (result.success === false) {
    const error = result.errors[0]!;
    TestEquality.equals("validate names the path", error.path, "$input[1]");
    TestValidator.predicate(
      "validate keeps the expectation readable",
      () => error.expected.length <= 64,
    );
  }

  const unit = typia.json.schema<Primitified>();
  const keys: string[] = Object.keys(unit.components.schemas ?? {});
  TestEquality.equals("one component emitted", keys.length, 1);

  const key: string = keys[0]!;
  TestValidator.predicate(
    "component name stays bounded",
    () => key.length <= 64,
  );

  const component = unit.components.schemas![key]!;
  TestValidator.predicate("component is an array", () =>
    OpenApiTypeChecker.isArray(component),
  );
  if (OpenApiTypeChecker.isArray(component)) {
    const items = component.items;
    TestValidator.predicate("array items form a union", () =>
      OpenApiTypeChecker.isOneOf(items),
    );
    if (OpenApiTypeChecker.isOneOf(items)) {
      TestValidator.predicate("array references itself", () =>
        items.oneOf.some(
          (elem) =>
            OpenApiTypeChecker.isReference(elem) &&
            elem.$ref === `#/components/schemas/${key}`,
        ),
      );
      TestValidator.predicate("array keeps the date-time arm", () =>
        items.oneOf.some(
          (elem) =>
            OpenApiTypeChecker.isString(elem) && elem.format === "date-time",
        ),
      );
    }
  }

  // Control: a recursion that already named itself through a declaration must
  // keep that declared name instead of taking the cycle placeholder.
  type Named = (string & tags.Format<"date-time">) | Named[];
  TestEquality.equals(
    "named recursion validates",
    typia.is<Named>([[DATE]]),
    true,
  );
  TestEquality.equals(
    "named recursion rejects",
    typia.is<Named>([["nope"]]),
    false,
  );

  // Every component this recursion emits is reached through the declaration, so
  // each name must be built from it -- the cycle placeholder never applies.
  const namedKeys: string[] = Object.keys(
    typia.json.schema<Named>().components.schemas ?? {},
  );
  TestValidator.predicate(
    "named recursion names every component from the declaration",
    () =>
      namedKeys.length !== 0 &&
      namedKeys.every((elem) => elem.includes("Named")),
  );
};
