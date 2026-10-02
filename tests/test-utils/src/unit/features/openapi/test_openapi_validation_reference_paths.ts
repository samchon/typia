import { OpenApi } from "@typia/interface";
import { _test_validate } from "@typia/template/openapi-validation";
import { OpenApiValidator } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies the shared validation oracle retains paths through component refs.
 *
 * Escaped component names formerly erased the discriminator during expected
 * path normalization, rejecting a correct validator's leaf diagnostic. Literal
 * paths independently pin the product result before the same helper executes.
 *
 * 1. Author discriminated object schemas with ordinary and escaped aliases.
 * 2. Check clean acceptance and literal spoiled paths at root and nested sites.
 * 3. Execute the shared oracle with those authored inputs and spoiler paths.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual OpenApiValidator.create accepts each clean object and reports the independently stated leaf path after changing only its numeric field. The actual shared _test_validate must accept the same fixture and spoiler oracle, distinguishing correct leaf normalization from erroneous union-owner grouping.
 * @evidence contracts/testing.md#independent-expectations Schemas, values, component spellings and expected root/nested/bracket paths are authored literals. Direct validator assertions establish the expected product report separately before helper execution; no report supplies or modifies the spoiler's expected path.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary, slash/tilde, percent/space and prototype-named own components contribute positive controls; plain and escaped alias chains and referenced discriminator constants retain the leaf path. Root, object member, array item, tuple item and quoted-property sites preserve their authored accessors. Every spoiled case changes one value from number to string while leaving its discriminator intact.
 * @evidence contracts/testing.md#execution-ownership This matching exported function is registered by the plugin-free node:test suite. It imports the direct shared oracle without template/native fixture metadata and executes authored schemas; generated native schema bindings remain in test-utils-automated rather than being relabeled as units.
 */
export const test_openapi_validation_reference_paths = (): void => {
  const scenarios = [
    { keys: ["A", "B"], tokens: ["A", "B"] },
    { keys: ["A/B", "C~D"], tokens: ["A~1B", "C~0D"] },
    { keys: ["A B", "100%"], tokens: ["A%20B", "100%"] },
    {
      keys: ["__proto__", "constructor"],
      tokens: ["__proto__", "constructor"],
    },
  ];
  for (const [scenarioIndex, scenario] of scenarios.entries())
    for (const aliases of [false, true]) {
      const components: OpenApi.IComponents = {
        schemas: {
          [scenario.keys[0]!]: {
            type: "object",
            properties: {
              kind: { $ref: "#/components/schemas/Kind~1A" },
              value: { type: "number" },
            },
            required: ["kind", "value"],
          },
          [scenario.keys[1]!]: {
            type: "object",
            properties: {
              kind: { $ref: "#/components/schemas/Kind~0B" },
              value: { type: "string" },
            },
            required: ["kind", "value"],
          },
          "Kind/A": { const: "a" },
          "Kind~B": { const: "b" },
        },
      };
      if (aliases) {
        components.schemas!.Left = {
          $ref: `#/components/schemas/${scenario.tokens[0]}`,
        };
        components.schemas!.Right = {
          $ref: `#/components/schemas/${scenario.tokens[1]}`,
        };
      }
      const union: OpenApi.IJsonSchema = {
        oneOf: (aliases ? ["Left", "Right"] : scenario.tokens).map((token) => ({
          $ref: `#/components/schemas/${token}`,
        })),
      };
      const sites: {
        schema: OpenApi.IJsonSchema;
        generate: () => unknown;
        spoil: (input: any) => void;
        path: string;
      }[] = [
        {
          schema: union,
          generate: () => ({ kind: "a", value: 1 }),
          spoil: (input) => {
            input.value = "invalid";
          },
          path: "$input.value",
        },
        {
          schema: {
            type: "object",
            properties: { payload: union },
            required: ["payload"],
          },
          generate: () => ({ payload: { kind: "a", value: 1 } }),
          spoil: (input) => {
            input.payload.value = "invalid";
          },
          path: "$input.payload.value",
        },
        {
          schema: { type: "array", items: union },
          generate: () => [{ kind: "a", value: 1 }],
          spoil: (input) => {
            input[0].value = "invalid";
          },
          path: "$input[0].value",
        },
        {
          schema: {
            type: "array",
            prefixItems: [union],
            additionalItems: false,
          },
          generate: () => [{ kind: "a", value: 1 }],
          spoil: (input) => {
            input[0].value = "invalid";
          },
          path: "$input[0].value",
        },
        {
          schema: {
            type: "object",
            properties: { "v.a": union },
            required: ["v.a"],
          },
          generate: () => ({ "v.a": { kind: "a", value: 1 } }),
          spoil: (input) => {
            input["v.a"].value = "invalid";
          },
          path: '$input["v.a"].value',
        },
      ];
      for (const [siteIndex, site] of sites.entries()) {
        const name = `reference ${scenarioIndex}/${aliases}/${siteIndex}`;
        const validate = OpenApiValidator.create({
          components,
          schema: site.schema,
          required: true,
        });
        const input = site.generate();
        const clean = validate(input);
        assert.equal(clean.success, true, name);
        if (clean.success) assert.equal(clean.data, input, name);
        site.spoil(input);
        const invalid = validate(input);
        assert.equal(invalid.success, false, name);
        if (!invalid.success)
          assert.deepEqual(
            invalid.errors.map((error) => error.path),
            [site.path],
            name,
          );
        _test_validate({
          name,
          components,
          schema: site.schema,
          factory: {
            generate: site.generate,
            SPOILERS: [
              (value) => {
                site.spoil(value);
                return [site.path];
              },
            ],
          },
        });
      }
    }
};
