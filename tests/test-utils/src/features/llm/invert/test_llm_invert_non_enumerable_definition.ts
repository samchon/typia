import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import { ILlmSchema } from "typia";

/**
 * Verifies component allocation covers every definition inversion can resolve.
 *
 * `LlmReference.resolve` finds a definition through `ObjectDictionary.get`,
 * which keys off `hasOwnProperty` and therefore sees own non-enumerable keys.
 * Seeding the allocation from the enumerable-only view would let such a
 * definition resolve while never being allocated, so it would bypass collision
 * management and could seize a name an allocated definition already owns —
 * silently dropping one of the two. Escaping the stray key is not enough: it
 * produces exactly the name the legal definition holds.
 *
 * 1. Give `$defs` an own non-enumerable forbidden key whose escaped form
 *    collides with a second, legal, enumerable key.
 * 2. Invert references to both.
 * 3. Assert each resolves to a distinct component carrying its own content.
 */
export const test_llm_invert_non_enumerable_definition = (): void => {
  const $defs: Record<string, ILlmSchema> = {
    A_x2F_B: { type: "string", description: "legal enumerable definition" },
  };
  Object.defineProperty($defs, "A/B", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: { type: "string", description: "forbidden non-enumerable definition" },
  });

  const components: OpenApi.IComponents = { schemas: {} };
  const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
    components,
    $defs,
    schema: {
      type: "object",
      properties: {
        forbidden: { $ref: "#/$defs/A~1B" },
        legal: { $ref: "#/$defs/A_x2F_B" },
      },
      required: [],
      additionalProperties: false,
    },
  });

  const schemas: Record<string, OpenApi.IJsonSchema> = components.schemas ?? {};
  TestValidator.predicate(
    "every allocated component key is legal",
    () => Object.keys(schemas).every((key) => /^[a-zA-Z0-9.\-_]+$/.test(key)),
  );
  TestValidator.equals(
    "the legal definition keeps its exact name",
    (schemas.A_x2F_B as { description?: string } | undefined)?.description,
    "legal enumerable definition",
  );

  const describe = (property: string): string | undefined => {
    const schema: OpenApi.IJsonSchema | undefined = OpenApiTypeChecker.isObject(
      inverted,
    )
      ? inverted.properties?.[property]
      : undefined;
    if (schema === undefined || OpenApiTypeChecker.isReference(schema) === false)
      return undefined;
    const target: OpenApi.IJsonSchema | undefined =
      schemas[schema.$ref.replace("#/components/schemas/", "")];
    return (target as { description?: string } | undefined)?.description;
  };
  TestValidator.equals(
    "each definition resolves to its own content",
    { forbidden: describe("forbidden"), legal: describe("legal") },
    {
      forbidden: "forbidden non-enumerable definition",
      legal: "legal enumerable definition",
    },
  );
};
