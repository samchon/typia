import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies recursive array aliases retain structural definitions and use-site
 * tags.
 *
 * Alias reservations and array recursion share component names. The native
 * producer must finish each definition before runtime consumers resolve it.
 *
 * 1. Generate single, shared and application schemas for recursive declarations.
 * 2. Resolve every component and pin the reported JSON array's exact body.
 * 3. Validate empty, nested and constrained values and their invalid twins.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual JSON producers emit the recursive graph; exact array shape and OpenApiValidator results detect reference-only cycles, lost branches and leaked use-site length constraints.
 * @evidence contracts/testing.md#independent-expectations Authored TypeScript declarations require arrays of JSON values, distinct mutually recursive element unions and the explicit min/max item bounds. Literal valid and invalid payloads establish expectations without snapshots.
 * @evidence contracts/testing.md#distinguishing-cases Single and shared roots, reversed visit order, both dialects, method parameters/output, generic/readonly/extended arrays, tuples, nullable unions, differently tagged and untagged siblings, empty/single/deep inputs and non-JSON leaves are exercised.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_recursive_array_alias through the canonical schema-suite start and root pnpm test.
 * @evidence contracts/e2e.md#necessary-boundary Executes TypeScript analysis, native schema emission and runtime reference validation together; in-memory metadata tests cannot detect lost declaration identity or public producer wiring.
 * @evidence contracts/e2e.md#shared-execution All producer calls join the existing schema-suite ttsx process and reuse its content-keyed native artifact without per-variant projects or installations.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each call emits its own component map and this invocation owns all payloads and projections. ttsx owns compiler lifetime and source-keyed invalidation; no cold-cache assertion is made.
 * @evidence contracts/e2e.md#preserved-coverage Adds the reported recursive-array graph and adjacent controls without removing existing recursive-object or tuple assertions; low-level ownership and per-use tags also have native unit coverage.
 */
export const test_json_schema_recursive_array_alias = (): void => {
  type JsonPrimitive = string | number | boolean | null;
  type JsonArray = JsonValue[];
  type JsonObject = { [key: string]: JsonValue };
  type JsonValue = JsonPrimitive | JsonArray | JsonObject;
  type SelfArray = SelfArray[];
  type MutualA = (string | MutualB)[];
  type MutualB = (number | MutualA)[];
  type Generic<T> = (T | Generic<T>)[];
  type ReadonlyTree = readonly (string | ReadonlyTree)[];
  interface ExtendedTree extends Array<string | ExtendedTree> {}
  type TupleTree = [string, TupleTree[]];
  type NullableTree = (string | NullableTree)[] | null;
  type TaggedTree = (string | (TaggedTree & tags.MinItems<1>))[];
  type StringList = string[];
  interface Constrained {
    small: JsonArray & tags.MaxItems<1>;
    many: JsonArray & tags.MinItems<2>;
    plain: JsonArray;
    ordinary: StringList & tags.MinItems<1>;
  }
  interface Application {
    echo(value: JsonValue): JsonArray;
  }

  const single = typia.json.schema<JsonValue>();
  const array = typia.json.schema<JsonArray>();
  const batch =
    typia.json.schemas<
      [
        JsonArray,
        JsonValue,
        JsonObject,
        SelfArray,
        MutualA,
        MutualB,
        Generic<string>,
        ReadonlyTree,
        ExtendedTree,
        TupleTree,
        NullableTree,
        Constrained,
        string[],
        TaggedTree,
      ]
    >();
  const reversed = typia.json.schemas<[JsonObject, JsonValue, JsonArray]>();
  const legacy = typia.json.schemas<[JsonValue, JsonArray], "3.0">();
  const application = typia.json.application<Application>();

  const resolve = (
    components: OpenApi.IComponents,
    schema: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema => {
    const visited = new Set<string>();
    while ("$ref" in schema) {
      if (visited.has(schema.$ref))
        throw new Error(`reference-only cycle: ${schema.$ref}`);
      visited.add(schema.$ref);
      const key = schema.$ref.slice("#/components/schemas/".length);
      const target = components.schemas?.[key];
      if (target === undefined) throw new Error(`missing component: ${key}`);
      schema = target;
    }
    return schema;
  };
  for (const unit of [single, array, batch, reversed, legacy, application]) {
    const components = unit.components as OpenApi.IComponents;
    TestEquality.equals(
      "JSON array has a body",
      components.schemas?.JsonArray,
      {
        type: "array",
        items: { $ref: "#/components/schemas/JsonValue" },
      },
    );
    for (const schema of Object.values(components.schemas ?? {}))
      resolve(components, schema);
  }
  const actual: { label: string; success: boolean }[] = [];
  const expected: { label: string; success: boolean }[] = [];
  let group = 0;
  const check = (
    schema: OpenApi.IJsonSchema,
    valid: unknown[],
    invalid: unknown[],
  ): void => {
    resolve(batch.components, schema);
    for (const [kind, values, success] of [
      ["valid", valid, true],
      ["invalid", invalid, false],
    ] as const)
      values.forEach((value, index) => {
        const label = `${group}/${kind}/${index}`;
        actual.push({
          label,
          success: OpenApiValidator.validate({
            components: batch.components,
            schema,
            value,
            required: true,
          }).success,
        });
        expected.push({ label, success });
      });
    group++;
  };
  check(
    batch.schemas[0]!,
    [[], [null], [{ nested: [1, true, { end: "ok" }] }]],
    [undefined, [undefined], [() => 0]],
  );
  check(
    batch.schemas[1]!,
    [null, "text", 1, true, [], { nested: [null] }, { nested: undefined }],
    [undefined, { nested: 1n }, [1n]],
  );
  check(batch.schemas[3]!, [[], [[]], [[[]]]], [null, [1], [["wrong"]]]);
  check(
    batch.schemas[4]!,
    [[], ["a"], [[1, ["b"]]]],
    [[1], [true], [["wrong"]]],
  );
  check(batch.schemas[5]!, [[], [1], [["a", [2]]]], [["wrong"], [true], [[1]]]);
  for (const index of [6, 7, 8])
    check(batch.schemas[index]!, [[], ["a", ["b"]]], [[1], ["a", [false]]]);
  check(
    batch.schemas[9]!,
    [
      ["a", []],
      ["a", [["b", []]]],
    ],
    [[], [1, []], ["a", [[1, []]]]],
  );
  check(
    batch.schemas[10]!,
    [null, [], ["a", null, [null]]],
    [1, [1], ["a", [false]]],
  );
  check(
    batch.schemas[11]!,
    [
      { small: [], many: [1, 2], plain: [], ordinary: ["a"] },
      { small: [[1, 2]], many: [[], []], plain: [1, 2, 3], ordinary: ["a"] },
    ],
    [
      { small: [1, 2], many: [1, 2], plain: [], ordinary: ["a"] },
      { small: [], many: [1], plain: [], ordinary: ["a"] },
      { small: [], many: [1, 2], plain: [undefined], ordinary: ["a"] },
      { small: [], many: [1, 2], plain: [], ordinary: [] },
    ],
  );
  check(batch.schemas[12]!, [[], ["a"]], [[1], [["a"]]]);
  TestEquality.equals("ordinary array stays inline", batch.schemas[12], {
    type: "array",
    items: { type: "string" },
  });
  check(
    batch.schemas[13]!,
    [[], ["a"], [["a", ["b"]]]],
    [[[]], [["a", []]], [1]],
  );
  TestEquality.equals("recursive payload matrix", actual, expected);
};
