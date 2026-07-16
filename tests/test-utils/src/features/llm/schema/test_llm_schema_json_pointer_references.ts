import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@typia/interface";
import { LlmJson, LlmSchemaConverter, LlmTypeChecker } from "@typia/utils";

/**
 * Verifies local LLM references obey JSON Pointer and URI-fragment semantics.
 *
 * Definition keys are unrestricted JSON object keys. References must encode one
 * `$defs` key as one RFC 6901 token, then encode that token as a URI fragment.
 * Valid references must resolve consistently for traversal, conversion,
 * coercion, parsing, coverage, and validation. Malformed or missing references
 * must never degrade to an accept-all schema.
 *
 * 1. Resolve the complete escaped and URI-encoded key matrix in every utility.
 * 2. Reject malformed, missing, and transitively broken reference chains.
 * 3. Preserve canonical references through conversion and discriminators.
 */
export const test_llm_schema_json_pointer_references = (): void => {
  const valid = [
    ["Plain", "#/$defs/Plain"],
    ["", "#/$defs/"],
    ["A/B", "#/$defs/A~1B"],
    ["T~N", "#/$defs/T~0N"],
    ["~1", "#/$defs/~01"],
    ["A B", "#/$defs/A%20B"],
    ["C%D", "#/$defs/C%25D"],
    ["Café", "#/$defs/Caf%C3%A9"],
    ["A~/B", "#/$defs/A~0~1B"],
    ["__proto__", "#/$defs/__proto__"],
  ] as const;

  for (const [key, $ref] of valid) {
    const parameters: ILlmSchema.IParameters = {
      type: "object",
      properties: { value: { $ref } },
      required: ["value"],
      additionalProperties: false,
      $defs: Object.fromEntries([[key, { type: "number" }]]),
    };
    const label: string = key.length === 0 ? "empty" : key;

    TestValidator.equals(
      `${label}: coerce encoded reference`,
      LlmJson.coerce<{ value: unknown }>({ value: "42" }, parameters).value,
      42,
    );
    const parsed = LlmJson.parse<{ value: unknown }>(
      '{"value":"42"}',
      parameters,
    );
    TestValidator.equals(`${label}: parse succeeds`, parsed.success, true);
    if (parsed.success)
      TestValidator.equals(`${label}: parse coerces`, parsed.data.value, 42);

    const validate = LlmJson.validate(parameters);
    TestValidator.equals(
      `${label}: referenced number passes`,
      validate({ value: 42 }).success,
      true,
    );
    TestValidator.equals(
      `${label}: referenced string fails`,
      validate({ value: "wrong" }).success,
      false,
    );
    TestValidator.equals(
      `${label}: structured output fails closed`,
      LlmJson.structuredOutput(parameters).validate({ value: "wrong" }).success,
      false,
    );

    const visited: ILlmSchema[] = [];
    LlmTypeChecker.visit({
      schema: parameters.properties.value!,
      $defs: parameters.$defs,
      closure: (schema) => visited.push(schema),
    });
    TestValidator.predicate(`${label}: traversal resolves`, () =>
      visited.some(LlmTypeChecker.isNumber),
    );
    TestValidator.equals(
      `${label}: coverage resolves`,
      LlmTypeChecker.covers({
        $defs: parameters.$defs,
        x: parameters.properties.value!,
        y: { type: "number" },
      }),
      true,
    );

    const components: OpenApi.IComponents = { schemas: {} };
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      components,
      schema: parameters,
      $defs: parameters.$defs,
    });
    TestValidator.predicate(
      `${label}: inversion keeps a reference target`,
      () =>
        Object.values(components.schemas!).some(
          (schema) => (schema as { type?: string }).type === "number",
        ),
    );
    TestValidator.predicate(
      `${label}: inversion is not accept-all`,
      () => "type" in inverted || "oneOf" in inverted || "$ref" in inverted,
    );
  }

  const malformed = [
    "#/$defs/A/B",
    "#/$defs/T~N",
    "#/$defs/C%D",
    "#/$defs/A B",
    "#/$defs/Café",
    "#/$defs/A%",
    "#/$defs/%C3%28",
    "#/$defs/A#B",
    "#/wrong/A",
    "https://example.com/schema.json#/$defs/A",
  ] as const;
  for (const $ref of [...malformed, "#/$defs/Missing"]) {
    const parameters: ILlmSchema.IParameters = {
      type: "object",
      properties: { value: { $ref } as ILlmSchema.IReference },
      required: ["value"],
      additionalProperties: false,
      $defs: Object.fromEntries([
        [$ref.replace("#/$defs/", ""), { type: "number" }],
      ]),
    };
    if ($ref.endsWith("Missing")) parameters.$defs = {};

    TestValidator.equals(
      `${$ref}: no malformed coercion`,
      LlmJson.coerce<{ value: unknown }>({ value: "42" }, parameters).value,
      "42",
    );
    const validate = LlmJson.validate(parameters);
    TestValidator.equals(
      `${$ref}: number fails closed`,
      validate({ value: 42 }).success,
      false,
    );
    TestValidator.equals(
      `${$ref}: string fails closed`,
      validate({ value: "wrong" }).success,
      false,
    );
    TestValidator.equals(
      `${$ref}: malformed coverage fails`,
      LlmTypeChecker.covers({
        $defs: parameters.$defs,
        x: parameters.properties.value!,
        y: { type: "number" },
      }),
      false,
    );
    TestValidator.equals(
      `${$ref}: identical unresolved references do not cover`,
      LlmTypeChecker.covers({
        $defs: parameters.$defs,
        x: parameters.properties.value!,
        y: parameters.properties.value!,
      }),
      false,
    );
  }

  const chained: ILlmSchema.IParameters = {
    type: "object",
    properties: { value: { $ref: "#/$defs/Alias" } },
    required: ["value"],
    additionalProperties: false,
    $defs: {
      Alias: { $ref: "#/$defs/Encoded~1Target" },
      "Encoded/Target": { type: "number" },
    },
  };
  TestValidator.equals(
    "valid reference chain coerces",
    LlmJson.coerce<{ value: unknown }>({ value: "42" }, chained).value,
    42,
  );
  TestValidator.equals(
    "valid reference chain validates",
    LlmJson.validate(chained)({ value: 42 }).success,
    true,
  );
  TestValidator.equals(
    "valid reference chain covers its target",
    LlmTypeChecker.covers({
      $defs: chained.$defs,
      x: chained.properties.value!,
      y: { type: "number" },
    }),
    true,
  );

  const brokenChain: ILlmSchema.IParameters = {
    ...chained,
    $defs: {
      Alias: { $ref: "#/$defs/Missing" },
    },
  };
  TestValidator.equals(
    "transitively missing reference fails validation",
    LlmJson.validate(brokenChain)({ value: 42 }).success,
    false,
  );
  TestValidator.equals(
    "transitively missing reference does not cover",
    LlmTypeChecker.covers({
      $defs: brokenChain.$defs,
      x: brokenChain.properties.value!,
      y: brokenChain.properties.value!,
    }),
    false,
  );

  const convertedDefinitions: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    components: {
      schemas: Object.fromEntries(
        valid.map(([key]) => [key, { type: "number" }]),
      ),
    },
    $defs: convertedDefinitions,
    schema: {
      type: "object",
      properties: Object.fromEntries(
        valid.map(([key]) => [key, { $ref: `#/components/schemas/${key}` }]),
      ),
      required: valid.map(([key]) => key),
    },
  });
  TestValidator.equals("OpenAPI conversion succeeds", converted.success, true);
  if (converted.success) {
    const refs: string[] = [];
    LlmTypeChecker.visit({
      schema: converted.value,
      $defs: convertedDefinitions,
      closure: (schema) => {
        if (LlmTypeChecker.isReference(schema)) refs.push(schema.$ref);
      },
    });
    for (const [, $ref] of valid)
      TestValidator.predicate(`converter emits ${$ref}`, () =>
        refs.includes($ref),
      );
  }

  const discriminatorDefinitions: Record<string, ILlmSchema> = {
    "A/B": {
      type: "object",
      properties: { kind: { type: "string", enum: ["slash"] } },
      required: ["kind"],
      additionalProperties: false,
    },
    "T~N": {
      type: "object",
      properties: { kind: { type: "string", enum: ["tilde"] } },
      required: ["kind"],
      additionalProperties: false,
    },
  };
  const discriminatorSchema: ILlmSchema = {
    anyOf: [{ $ref: "#/$defs/A~1B" }, { $ref: "#/$defs/T~0N" }],
    "x-discriminator": {
      propertyName: "kind",
      mapping: {
        slash: "#/$defs/A~1B",
        tilde: "#/$defs/T~0N",
      },
    },
  };
  const discriminatorComponents: OpenApi.IComponents = { schemas: {} };
  const discriminatorInverted = LlmSchemaConverter.invert({
    components: discriminatorComponents,
    schema: discriminatorSchema,
    $defs: discriminatorDefinitions,
  });
  TestValidator.equals(
    "inversion preserves encoded discriminator identity",
    "oneOf" in discriminatorInverted
      ? discriminatorInverted.discriminator?.mapping
      : undefined,
    {
      slash: "#/components/schemas/A~1B",
      tilde: "#/components/schemas/T~0N",
    },
  );
};
