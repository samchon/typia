import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies LLM producers retain recursive array bodies and independent
 * constraints.
 *
 * LLM schemas reuse the JSON component graph before converting references to
 * $defs. A self-reference-only component remains broken after that conversion.
 *
 * 1. Generate schema, parameters and application results for one recursive input.
 * 2. Resolve the emitted definitions and assert exact array bodies and bounds.
 * 3. Exercise generated function validation with valid and adjacent invalid data.
 *
 * @evidence contracts/testing.md#behavioral-verification Three public LLM producers must emit structural array definitions; application validation distinguishes nested strings from numbers and preserves maxItems at its tagged use.
 * @evidence contracts/testing.md#independent-expectations The authored Value union permits strings or arrays of Value, and only small has an explicit maximum length of one. Expected fragments and payload outcomes follow those declarations.
 * @evidence contracts/testing.md#distinguishing-cases Schema versus parameters versus function input/output, strict versus default conversion, tagged versus plain arrays, empty and nested data, excessive root length and incorrect nested leaves are separate controls.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_llm_schema_recursive_array_alias through schema-suite start and root pnpm test.
 * @evidence contracts/e2e.md#necessary-boundary Connects real TypeScript analysis and native JSON-to-LLM emission to generated runtime function validation; unit metadata graphs cannot verify those producer connections.
 * @evidence contracts/e2e.md#shared-execution All calls share the existing ttsx schema-suite project and content-keyed native plugin; no separate host or install is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Definitions, inputs and output projections belong to this invocation. ttsx owns compilation and process lifetime; the test mutates no shared schema or persistent state.
 * @evidence contracts/e2e.md#preserved-coverage Adds recursive-array coverage across the shared producer consumers while existing recursive-object tests remain executed; native tests own component reservation and tag identity details.
 */
export const test_llm_schema_recursive_array_alias = (): void => {
  type Value = string | ValueArray;
  type ValueArray = Value[];
  interface Input {
    value: Value;
    small: ValueArray & tags.MaxItems<1>;
  }
  interface Application {
    echo(input: Input): Input;
  }
  const definitions: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<Input>(definitions);
  const parameters = typia.llm.parameters<Input>();
  const strict = typia.llm.parameters<Input, { strict: true }>();
  const application = typia.llm.application<Application>();
  const fn = application.functions[0]!;
  const resolve = (
    value: ILlmSchema,
    defs: Record<string, ILlmSchema>,
  ): ILlmSchema => {
    const visited = new Set<string>();
    while ("$ref" in value) {
      if (visited.has(value.$ref))
        throw new Error(`reference-only cycle: ${value.$ref}`);
      visited.add(value.$ref);
      const target = defs[value.$ref.slice("#/$defs/".length)];
      if (target === undefined)
        throw new Error(`missing definition: ${value.$ref}`);
      value = target;
    }
    return value;
  };
  for (const [root, defs, strictMode] of [
    [schema, definitions, false],
    [parameters, parameters.$defs, false],
    [strict, strict.$defs, true],
    [fn.parameters, fn.parameters.$defs, false],
    [fn.output!, fn.output!.$defs, false],
  ] as const) {
    TestEquality.equals("LLM array definition", defs.ValueArray, {
      type: "array",
      items: { $ref: "#/$defs/Value" },
    });
    const object = resolve(root, defs);
    if (!("properties" in object))
      throw new Error("input must remain an object");
    const small = resolve(object.properties.small!, defs);
    TestEquality.equals("tagged LLM array", small, {
      type: "array",
      items: { $ref: "#/$defs/Value" },
      ...(strictMode ? { description: "@maxItems 1" } : { maxItems: 1 }),
    });
    for (const entry of Object.values(defs)) resolve(entry, defs);
  }
  TestEquality.equals(
    "accepts empty",
    fn.validate({ value: [], small: [] }).success,
    true,
  );
  TestEquality.equals(
    "accepts nested",
    fn.validate({ value: ["a", ["b"]], small: [["a", "b"]] }).success,
    true,
  );
  TestEquality.equals(
    "rejects number",
    fn.validate({ value: ["a", [1]], small: [] }).success,
    false,
  );
  TestEquality.equals(
    "rejects long tagged use",
    fn.validate({ value: [], small: ["a", "b"] }).success,
    false,
  );
};
