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
