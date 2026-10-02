import typia, { tags } from "typia";

const unit = typia.reflect.schema<1n | 9007199254740993n>();
const collection = typia.reflect.schemas<[2n, "a" | 3]>();
const objects = typia.reflect.schema<{ big: 7n; name: string }>();

// A tag reaches a constant by matching the child's value against the merged
// parent's, so the constant value has to compare by value. The number and
// string constants are the controls that were never at risk.
const tagged = typia.reflect.schema<(1n | 2n) & tags.Type<"int64">>();
const taggedNumber = typia.reflect.schema<(1 | 2) & tags.Type<"uint32">>();
const fixture = { unit, collection, objects, tagged, taggedNumber };

/**
 * Verifies reflect schema bigint in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original reflectSchemaBigintSource
 * declarations; the former reflectSchemaBigintRunner observations execute in
 * the existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: schema; schemas[0]; schemas[1]
 * string; schemas[1] number; object property.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from reflectSchemaBigintRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Declared bigint constants and object property types determine reflected metadata content and actual bigint representation. Separate string/number constants and surrounding object members prevent fixing bigint representation by changing all constant kinds.
 * @evidence contracts/testing.md#distinguishing-cases Preserves schema; schemas[0]; schemas[1] string; schemas[1] number; object property; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_reflect_schema_bigint in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed reflectSchemaBigintSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/reflect_schema_bigint_transform_test.go reflectSchemaBigintRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_reflect_schema_bigint = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const render: any = (value: any): any =>
    typeof value === "bigint" ? value.toString() + "n" : JSON.stringify(value);

  const constantsOf: any = (schema: any, type: any): any => {
    const constant: any = (schema.constants ?? []).find(
      (c: any): any => c.type === type,
    );
    return constant === undefined
      ? []
      : constant.values.map((v: any): any => v.value);
  };

  const check: any = (label: any, actual: any, expected: any): any => {
    if (actual.length !== expected.length) {
      throw new Error(
        label +
          ": expected " +
          expected.map(render).join(", ") +
          ", got " +
          actual.map(render).join(", "),
      );
    }
    actual.forEach((item: any, index: any): any => {
      if (typeof item !== typeof expected[index] || item !== expected[index]) {
        throw new Error(
          label +
            "[" +
            index +
            "]: expected " +
            render(expected[index]) +
            " (" +
            typeof expected[index] +
            "), got " +
            render(item) +
            " (" +
            typeof item +
            ")",
        );
      }
    });
  };

  check("schema", constantsOf(mod.unit.schema, "bigint"), [
    1n,
    9007199254740993n,
  ]);
  check("schemas[0]", constantsOf(mod.collection.schemas[0], "bigint"), [2n]);

  // A neighboring constant kind must keep its own representation.
  check("schemas[1] string", constantsOf(mod.collection.schemas[1], "string"), [
    "a",
  ]);
  check(
    "schemas[1] number",
    constantsOf(mod.collection.schemas[1], "number"),
    [3],
  );

  // The surrounding tree still reports the object and its members.
  const object: any = mod.objects.components.objects[0];
  if (object === undefined || object.properties.length !== 2) {
    throw new Error(
      "object metadata was not emitted: " +
        JSON.stringify(mod.objects, (_k: any, v: any): any =>
          typeof v === "bigint" ? v.toString() : v,
        ),
    );
  }
  const big: any = object.properties.find(
    (p: any): any => constantsOf(p.key, "string")[0] === "big",
  );
  if (big === undefined) {
    throw new Error("the 'big' property is missing from the object metadata");
  }
  check("object property", constantsOf(big.value, "bigint"), [7n]);

  const tagNames: any = (schema: any, type: any): any => {
    const constant: any = (schema.constants ?? []).find(
      (c: any): any => c.type === type,
    );
    if (constant === undefined) {
      throw new Error("no " + type + " constant was emitted");
    }
    return constant.values.map((v: any): any =>
      (v.tags ?? [])
        .flat()
        .map((t: any): any => t.name)
        .join(","),
    );
  };

  // Every member keeps the tag the intersection put on it.
  const expectTags: any = (label: any, actual: any, expected: any): any => {
    if (
      actual.length === 0 ||
      actual.some((names: any): any => names !== expected)
    ) {
      throw new Error(
        label +
          ": expected every member tagged " +
          expected +
          ", got " +
          JSON.stringify(actual),
      );
    }
  };
  expectTags(
    "bigint constant",
    tagNames(mod.tagged.schema, "bigint"),
    'Type<"int64">',
  );
  expectTags(
    "number constant",
    tagNames(mod.taggedNumber.schema, "number"),
    'Type<"uint32">',
  );

  console.log("ok");
};
