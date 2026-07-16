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
    ["A~1B", "#/$defs/A~01B"],
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
    // An unrestricted `$defs` key is not a legal Components Object key, so
    // inversion allocates one. The definition must survive under that
    // allocated name, and the emitted reference must resolve to it.
    const componentKey: string | undefined = Object.keys(
      components.schemas!,
    ).find(
      (name) => (components.schemas![name] as { type?: string }).type ===
        "number",
    );
    TestValidator.predicate(
      `${label}: inversion allocates a legal component key`,
      () =>
        componentKey !== undefined && /^[a-zA-Z0-9.\-_]+$/.test(componentKey),
    );
    TestValidator.equals(
      `${label}: inverted reference resolves by JSON Pointer`,
      resolveLocalReference(
        { components },
        (inverted as OpenApi.IJsonSchema.IObject).properties?.value as
          | OpenApi.IJsonSchema.IReference
          | undefined,
      ),
      components.schemas![componentKey!],
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

  // A percent-encoded separator is a well-formed triplet, so it passes the
  // fragment regex and decodes to the multi-token pointer `/$defs/A/B` rather
  // than the single `$defs` key `A/B`. Only rejecting it keeps one canonical
  // spelling per key, so the raw target must be present for this to bite.
  const extraSegment: ILlmSchema.IParameters = {
    type: "object",
    properties: { value: { $ref: "#/$defs/A%2FB" } },
    required: ["value"],
    additionalProperties: false,
    $defs: { "A/B": { type: "number" } },
  };
  TestValidator.equals(
    "percent-encoded pointer separator does not resolve its raw key",
    LlmJson.coerce<{ value: unknown }>({ value: "42" }, extraSegment).value,
    "42",
  );
  TestValidator.equals(
    "percent-encoded pointer separator fails closed",
    LlmJson.validate(extraSegment)({ value: 42 }).success,
    false,
  );
  TestValidator.equals(
    "percent-encoded pointer separator fails OpenAPI conversion",
    LlmSchemaConverter.schema({
      components: { schemas: { "A/B": { type: "number" } } },
      $defs: {},
      schema: { $ref: "#/components/schemas/A%2FB" },
    }).success,
    false,
  );

  // Percent-decoding precedes token-decoding, so these are alternate spellings
  // of the same keys and must still resolve.
  for (const [$ref, key] of [
    ["#/$defs/A%7E1B", "A/B"],
    ["#/$defs/A%7E0B", "A~B"],
  ] as const)
    TestValidator.equals(
      `${$ref}: percent-encoded tilde resolves ${key}`,
      LlmJson.coerce<{ value: unknown }>(
        { value: "42" },
        {
          type: "object",
          properties: { value: { $ref } },
          required: ["value"],
          additionalProperties: false,
          $defs: Object.fromEntries([[key, { type: "number" }]]),
        },
      ).value,
      42,
    );

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
        valid.map(([key, $ref]) => [
          key,
          {
            $ref: $ref.replace("#/$defs/", "#/components/schemas/"),
          },
        ]),
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

  const collisionDefinitions: Record<string, ILlmSchema> = {};
  const collision = LlmSchemaConverter.schema({
    components: {
      schemas: {
        "A/B": { type: "number" },
        "A~1B": {
          type: "array",
          prefixItems: [{ type: "string" }],
        },
      },
    },
    $defs: collisionDefinitions,
    schema: { $ref: "#/components/schemas/A~1B" },
  });
  TestValidator.equals(
    "encoded reference does not validate the colliding raw key",
    collision.success,
    true,
  );
  TestValidator.equals(
    "encoded reference selects the decoded raw component identity",
    collisionDefinitions,
    { "A/B": { type: "number" } },
  );

  const rootParameters = LlmSchemaConverter.parameters({
    components: {
      schemas: {
        "Root/A": {
          type: "number",
          description: "parent slash description",
        },
        "Root/A.Child": {
          type: "object",
          properties: { value: { type: "number" } },
          required: ["value"],
          additionalProperties: false,
        },
        "Root~1A.Child": { type: "number" },
      },
    },
    schema: { $ref: "#/components/schemas/Root~1A.Child" },
  });
  TestValidator.equals(
    "root parameters decode the raw component identity",
    rootParameters.success,
    true,
  );
  if (rootParameters.success)
    TestValidator.predicate(
      "root parameters cascade the decoded parent description",
      () =>
        rootParameters.value.description?.includes(
          "parent slash description",
        ) === true,
    );

  for (const $ref of [
    "#/components/schemas/A/B",
    "#/components/schemas/T~N",
    "#/components/schemas/C%D",
    "#/components/schemas/A B",
    "#/components/schemas/A%",
    "https://example.com/schema.json#/components/schemas/A",
  ])
    TestValidator.equals(
      `${$ref}: malformed OpenAPI reference fails conversion`,
      LlmSchemaConverter.schema({
        components: {
          schemas: {
            [$ref.replace("#/components/schemas/", "")]: {
              type: "number",
            },
          },
        },
        $defs: {},
        schema: { $ref },
      }).success,
      false,
    );

  const forwardDiscriminatorDefinitions: Record<string, ILlmSchema> = {};
  const forwardDiscriminator = LlmSchemaConverter.schema({
    components: {
      schemas: {
        "A/B": { type: "number" },
        "T~N": { type: "string" },
      },
    },
    $defs: forwardDiscriminatorDefinitions,
    schema: {
      oneOf: [
        { $ref: "#/components/schemas/A~1B" },
        { $ref: "#/components/schemas/T~0N" },
      ],
      discriminator: {
        propertyName: "kind",
        mapping: {
          slash: "#/components/schemas/A~1B",
          tilde: "#/components/schemas/T~0N",
        },
      },
    },
  });
  TestValidator.equals(
    "forward discriminator conversion succeeds",
    forwardDiscriminator.success,
    true,
  );
  if (forwardDiscriminator.success)
    TestValidator.equals(
      "forward discriminator preserves raw component identities",
      LlmTypeChecker.isAnyOf(forwardDiscriminator.value)
        ? forwardDiscriminator.value["x-discriminator"]?.mapping
        : undefined,
      {
        slash: "#/$defs/A~1B",
        tilde: "#/$defs/T~0N",
      },
    );
  TestValidator.predicate(
    "forward discriminator stores raw component identities",
    () =>
      Object.hasOwn(forwardDiscriminatorDefinitions, "A/B") &&
      Object.hasOwn(forwardDiscriminatorDefinitions, "T~N"),
  );

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
  // Inversion allocates a legal Components Object key for each unrestricted
  // `$defs` key, so the mapping identifies the allocated component rather than
  // the raw one. What must hold is that each discriminator value still selects
  // the branch its raw key named.
  const discriminatorMapping: Record<string, string> | undefined =
    "oneOf" in discriminatorInverted
      ? discriminatorInverted.discriminator?.mapping
      : undefined;
  TestValidator.predicate(
    "inversion maps every discriminator to a legal component key",
    () =>
      discriminatorMapping !== undefined &&
      Object.values(discriminatorMapping).every((reference) =>
        /^#\/components\/schemas\/[a-zA-Z0-9.\-_]+$/.test(reference),
      ),
  );
  TestValidator.equals(
    "inversion keeps each discriminator on its own branch",
    Object.fromEntries(
      Object.entries(discriminatorMapping ?? {}).map(([tag, reference]) => [
        tag,
        (
          discriminatorComponents.schemas![
            reference.replace("#/components/schemas/", "")
          ] as OpenApi.IJsonSchema.IObject | undefined
        )?.properties?.kind,
      ]),
    ),
    {
      slash: { type: "string", const: "slash" },
      tilde: { type: "string", const: "tilde" },
    },
  );
  const validateDiscriminator = LlmJson.validate({
    type: "object",
    properties: { value: discriminatorSchema },
    required: ["value"],
    additionalProperties: false,
    $defs: discriminatorDefinitions,
  });
  TestValidator.equals(
    "encoded discriminator validates its first branch",
    validateDiscriminator({ value: { kind: "slash" } }).success,
    true,
  );
  TestValidator.equals(
    "encoded discriminator validates its later branch",
    validateDiscriminator({ value: { kind: "tilde" } }).success,
    true,
  );
};

const resolveLocalReference = (
  document: { components: OpenApi.IComponents },
  schema: OpenApi.IJsonSchema.IReference | undefined,
): OpenApi.IJsonSchema | undefined => {
  if (schema === undefined || schema.$ref.startsWith("#/") === false)
    return undefined;
  let current: unknown = document;
  for (const token of decodeURIComponent(schema.$ref.slice(2)).split("/")) {
    const key: string = token.replace(/~1/g, "/").replace(/~0/g, "~");
    if (typeof current !== "object" || current === null) return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current as OpenApi.IJsonSchema | undefined;
};
