import { TestValidator } from "@nestia/e2e";
import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
  SwaggerV2,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import {
  LlmSchemaConverter,
  LlmTypeChecker,
  OpenApiConverter,
} from "@typia/utils";

/**
 * Verifies reserved schema names retain own-definition and prototype semantics.
 *
 * Inherited properties are not schemas, and `__proto__` must remain data rather
 * than changing a public dictionary prototype. Conversion, inversion and
 * version conversion must preserve that ownership distinction.
 *
 * 1. Exercise authored reserved, nested, recursive, inherited-only and cyclic
 *    definitions.
 * 2. Assert own-key presence, unchanged prototypes, unresolved-reference failure
 *    and version-conversion preservation.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual LLM/OpenAPI converter and coverage operations verify own definition keys, prototype identity, failure for inherited-only definitions and termination of cyclic coverage.
 * @evidence contracts/testing.md#independent-expectations Authored reserved keys and explicit expected booleans/undefined values establish ownership and absence. Prototype comparisons use native Object.prototype identity rather than a produced schema as an oracle. Own-key checks establish preservation of names without claiming every unasserted field of version-converted definitions.
 * @evidence contracts/testing.md#distinguishing-cases toString/constructor/__proto__, nested and self-recursive references, inherited-only names, cyclic LLM aliases, absent components store and Swagger/OpenAPI 2.0/3.0/3.1 conversion keep their positive and negative distinctions.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test under a plugin-free configuration and oracle. Its inputs are authored literals and direct utility calls; no native producer, installed artifact or product host is required. Private local assertion/reference helpers remain part of this case's review.
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
  TestEquality.equals("reserved conversion succeeds", converted.success, true);
  for (const key of ["toString", "constructor", "__proto__"])
    TestValidator.predicate(`$defs owns ${key}`, () =>
      Object.hasOwn($defs, key),
    );
  TestEquality.equals(
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
  TestEquality.equals(
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
  TestEquality.equals(
    "inherited-only component is missing",
    missing.success,
    false,
  );

  const parameters = LlmSchemaConverter.parameters({
    components: { schemas },
    schema: {
      type: "object",
      properties: {
        value: { $ref: "#/components/schemas/__proto__" },
      },
      required: ["value"],
    },
  });
  TestEquality.equals(
    "parameters conversion succeeds",
    parameters.success,
    true,
  );
  if (parameters.success)
    TestEquality.equals(
      "public $defs keeps ordinary prototype",
      Object.getPrototypeOf(parameters.value.$defs) === Object.prototype,
      true,
    );

  const createdComponents: OpenApi.IComponents = {};
  LlmSchemaConverter.invert({
    components: createdComponents,
    $defs: Object.fromEntries([["__proto__", { type: "string" }]]),
    schema: { $ref: "#/$defs/__proto__" },
  });
  TestEquality.equals(
    "public components keeps ordinary prototype",
    Object.getPrototypeOf(createdComponents.schemas!) === Object.prototype,
    true,
  );

  const cyclicDefinitions: Record<string, ILlmSchema> = {
    A: { $ref: "#/$defs/B" },
    B: { $ref: "#/$defs/A" },
  };
  TestEquality.equals(
    "cyclic LLM coverage terminates",
    LlmTypeChecker.covers({
      $defs: cyclicDefinitions,
      x: { $ref: "#/$defs/A" },
      y: { type: "string" },
    }),
    false,
  );
  TestEquality.equals(
    "inherited LLM definition is unresolved",
    LlmTypeChecker.covers({
      $defs: Object.create({ toString: { type: "string" } }),
      x: { $ref: "#/$defs/toString" },
      y: { type: "string" },
    }),
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
