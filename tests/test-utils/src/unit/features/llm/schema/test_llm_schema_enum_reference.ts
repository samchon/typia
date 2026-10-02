import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies inline and referenced constants retain separate LLM union
 * identities.
 *
 * A referenced constant definition must remain available to a union instead of
 * losing the definition while inlining the other constant.
 *
 * 1. Convert the authored inline constant and two-constant referenced definition.
 * 2. Assert success, two union alternatives and the independently expected
 *    referenced enum.
 */
export const test_llm_schema_enum_reference = (): void => {
  const components: OpenApi.IComponents = {
    schemas: {
      named: {
        oneOf: [
          {
            const: 4,
          },
          {
            const: 5,
          },
        ],
      },
    },
  };
  const schema: OpenApi.IJsonSchema = {
    oneOf: [
      {
        const: 3,
      },
      {
        $ref: "#/components/schemas/named",
      },
    ],
  };

  const $defs: Record<string, ILlmSchema> = {};
  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components,
      schema,
      $defs,
    });
  TestEquality.equals(
    "success",
    result.success,
    true,
    (key) => key === "description",
  );
  // const 3 is inlined as { type: "number", enum: [3] },
  // while $ref to "named" stays as a reference
  TestValidator.predicate("anyOf", () => {
    if (result.success === false) return false;
    const anyOf = (result.value as any).anyOf;
    return Array.isArray(anyOf) && anyOf.length === 2;
  });
  TestEquality.equals("named $defs", ($defs.named as any)?.enum, [4, 5]);
};
