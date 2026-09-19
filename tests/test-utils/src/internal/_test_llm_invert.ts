import { IJsonSchemaUnit, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Asserts an LLM schema inverts to the OpenAPI schema typia emits for the same
 * type.
 *
 * The LLM and emended OpenAPI formats spell the same type differently: a union
 * is `anyOf` against `oneOf`, and a literal is an `enum` against a `const`. An
 * inversion is therefore checked against `typia.json.schema<T>()`, not against
 * the LLM schema it came from. Both sides resolve their `$ref`s against their
 * own definitions, and union members compare as a set, because member order
 * carries no meaning. Descriptions are skipped: the LLM side may carry prose
 * the JSON side does not.
 *
 * @param title Assertion title
 * @param llm LLM schema to invert
 * @param $defs Definitions `llm` was written into
 * @param json OpenAPI schema of the same type
 */
export const _test_llm_invert = (
  title: string,
  llm: ILlmSchema,
  $defs: Record<string, ILlmSchema>,
  json: IJsonSchemaUnit,
): void => {
  const components: OpenApi.IComponents = {};
  const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
    components,
    $defs,
    schema: llm,
  });
  TestEquality.equals(
    title,
    normalize(json.components as OpenApi.IComponents, json.schema),
    normalize(components, inverted),
    (key) => key === "description",
  );
};

const normalize = (
  components: OpenApi.IComponents,
  schema: unknown,
  visited: Set<string> = new Set(),
): unknown => {
  if (Array.isArray(schema))
    return schema.map((elem) => normalize(components, elem, visited));
  if (typeof schema !== "object" || schema === null) return schema;
  const record = schema as Record<string, unknown>;
  if (typeof record.$ref === "string") {
    const key: string = record.$ref.replace("#/components/schemas/", "");
    const target: OpenApi.IJsonSchema | undefined = components.schemas?.[key];
    if (target === undefined || visited.has(key)) return record;
    // SIBLINGS OF THE REFERENCE, SUCH AS ITS DESCRIPTION, OVERLAY THE TARGET
    const { $ref: _ref, ...siblings } = record;
    return {
      ...(normalize(components, target, new Set([...visited, key])) as object),
      ...(normalize(components, siblings, visited) as object),
    };
  }
  const output: Record<string, unknown> = Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      normalize(components, value, visited),
    ]),
  );
  if (Array.isArray(output.oneOf))
    output.oneOf = [...output.oneOf].sort((x, y) =>
      signature(x).localeCompare(signature(y)),
    );
  return output;
};

/** Sort key of a union member, blind to the descriptions the comparison skips. */
const signature = (schema: unknown): string =>
  JSON.stringify(schema, (key, value) =>
    key === "description" ? undefined : value,
  );
