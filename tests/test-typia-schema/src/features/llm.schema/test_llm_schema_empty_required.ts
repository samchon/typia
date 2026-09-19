import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies LLM schemas keep empty object shell fields in every mode.
 *
 * Function-calling schemas need to state explicitly that an object has no named
 * parameters. Both default and strict LLM schemas therefore keep `properties:
 * {}` and `required: []`, while strict mode additionally forces
 * `additionalProperties: false`.
 *
 * 1. Generate default and strict LLM schemas for an empty object interface.
 * 2. Resolve each `$defs` reference.
 * 3. Assert both object shells keep explicit empty fields.
 */
export const test_llm_schema_empty_required = (): void => {
  interface IEmpty {}

  const nonStrictDefs: Record<string, ILlmSchema> = {};
  const nonStrict = resolve(
    typia.llm.schema<IEmpty>(nonStrictDefs),
    nonStrictDefs,
  );

  assertShell("default empty object", nonStrict);

  const strictDefs: Record<string, ILlmSchema> = {};
  const strict = resolve(
    typia.llm.schema<IEmpty, { strict: true }>(strictDefs),
    strictDefs,
  );

  assertShell("strict empty object", strict, false);
};

const resolve = (
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema => {
  if ("$ref" in schema) return $defs[schema.$ref.split("/").at(-1)!]!;
  return schema;
};

const assertShell = (
  name: string,
  schema: ILlmSchema,
  additionalProperties?: false,
): void => {
  TestEquality.equals(
    name,
    clean({
      type: (schema as ILlmSchema.IObject).type,
      properties: (schema as ILlmSchema.IObject).properties,
      required: (schema as ILlmSchema.IObject).required,
    }),
    {
      type: "object",
      properties: {},
      required: [],
    },
  );
  if (additionalProperties !== undefined)
    TestEquality.equals(
      `${name} additionalProperties`,
      (schema as ILlmSchema.IObject).additionalProperties,
      additionalProperties,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
