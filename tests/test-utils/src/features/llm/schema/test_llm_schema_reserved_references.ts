import { TestValidator } from "@nestia/e2e";
import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
  SwaggerV2,
} from "@typia/interface";
import { LlmSchemaConverter, OpenApiConverter } from "@typia/utils";

/**
 * Verifies reserved schema names remain own definitions in both directions.
 *
 * Ordinary-object lookup made inherited names such as `constructor` and
 * `toString` appear already converted, while assigning `__proto__` could mutate
 * a definition store instead of creating a definition. Missing inherited
 * references must be errors, not implicit schemas.
 *
 * 1. Convert reserved, nested, and recursive component names into LLM $defs.
 * 2. Invert those $defs into an ordinary components object without prototype
 *    mutation.
 * 3. Require an inherited-only component name to produce a conversion error.
 */
export const test_llm_schema_reserved_references = (): void => {
  const schemas = Object.fromEntries([
    ["toString", { type: "string" }],
    [
      "constructor",
      {
        type: "object",
        properties: { child: { $ref: "#/components/schemas/__proto__" } },
        required: ["child"],
      },
    ],
    [
      "__proto__",
      {
        type: "object",
        properties: { next: { $ref: "#/components/schemas/__proto__" } },
      },
    ],
  ]) as Record<string, OpenApi.IJsonSchema>;
  const $defs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    components: { schemas },
    $defs,
    schema: {
      type: "object",
      properties: Object.fromEntries([
        ["text", { $ref: "#/components/schemas/toString" }],
        ["record", { $ref: "#/components/schemas/constructor" }],
      ]),
      required: ["text", "record"],
    },
  });
  TestValidator.equals("reserved conversion succeeds", converted.success, true);
  for (const key of ["toString", "constructor", "__proto__"])
    TestValidator.predicate(`$defs owns ${key}`, () =>
      Object.hasOwn($defs, key),
    );
  TestValidator.equals(
    "$defs prototype is not polluted",
    ($defs as any).next,
    undefined,
  );

  const components: OpenApi.IComponents = { schemas: {} };
  const inverted = LlmSchemaConverter.invert({
    components,
    $defs,
    schema: converted.success ? converted.value : {},
  });
  TestValidator.predicate("inverted object retained", () => "type" in inverted);
  for (const key of ["toString", "constructor", "__proto__"])
    TestValidator.predicate(`components owns ${key}`, () =>
      Object.hasOwn(components.schemas!, key),
    );
  TestValidator.equals(
    "components prototype is not polluted",
    (components.schemas as any).next,
    undefined,
  );

  const inheritedSchemas = Object.create({
    toString: { type: "string" },
  }) as Record<string, OpenApi.IJsonSchema>;
  const missing: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components: { schemas: inheritedSchemas },
      $defs: {},
      schema: { $ref: "#/components/schemas/toString" },
    });
  TestValidator.equals(
    "inherited-only component is missing",
    missing.success,
    false,
  );

  const downgraded = [
    OpenApiConverter.downgradeComponents({ schemas }, "2.0"),
    OpenApiConverter.downgradeComponents({ schemas }, "3.0").schemas!,
    OpenApiConverter.downgradeComponents({ schemas }, "3.1").schemas!,
  ];
  for (const [index, definitions] of downgraded.entries())
    for (const key of ["toString", "constructor", "__proto__"])
      TestValidator.predicate(`downgrade ${index} owns ${key}`, () =>
        Object.hasOwn(definitions, key),
      );

  const upgraded = OpenApiConverter.upgradeDocument({
    swagger: "2.0",
    definitions: Object.fromEntries([
      ["__proto__", { type: "string" }],
      ["entry", { $ref: "#/definitions/__proto__" }],
    ]),
  } satisfies SwaggerV2.IDocument);
  TestValidator.predicate("Swagger definition stays own", () =>
    Object.hasOwn(upgraded.components.schemas!, "__proto__"),
  );
};
