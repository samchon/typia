import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

/**
 * Verifies strict LLM schemas keep an empty `required` array.
 *
 * OpenAI structured-output strict mode requires object shells to carry
 * `additionalProperties: false` and a required-list field. An empty object has
 * no property names, but the strict schema must still expose `required: []`.
 *
 * 1. Generate a strict LLM schema for an empty object interface.
 * 2. Resolve the `$defs` reference.
 * 3. Assert the object shell keeps `properties: {}` and `required: []`.
 */
export const test_llm_schema_strict_empty_required = (): void => {
  interface IStrictEmpty {}

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IStrictEmpty, { strict: true }>($defs);
  const empty = resolve(schema, $defs);

  TestValidator.equals("strict empty object", clean(empty), {
    type: "object",
    properties: {},
    required: [],
    additionalProperties: false,
  });
};

const resolve = (
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema => {
  if ("$ref" in schema) return $defs[schema.$ref.split("/").at(-1)!]!;
  return schema;
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
