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
 * Reference normalization decodes local component pointers and requires own
 * definitions. Missing targets and alias-only cycles fail rather than becoming
 * raw references that might compare equal. Recursive object back-edges retain
 * their reference spelling, so differently named recursive graphs can still
 * compare unequal. The normalizer is a comparison policy, not graph
 * isomorphism. Default and example payloads stay literal data, even when they
 * contain a property named `$ref`; their contents are compared without schema
 * expansion.
 *
 * @param title Assertion title
 * @param llm LLM schema to invert
 * @param $defs Definitions `llm` was written into
 * @param json OpenAPI schema of the same type
 *
 * @evidence contracts/testing.md#behavioral-verification The helper inverts a natively generated LLM schema and compares the normalized result with the natively generated JSON schema of the same type; an erased keyword, unresolved union or empty definition changes the comparison.
 * @evidence contracts/testing.md#independent-expectations The expected JSON schema comes from the separate json.schema API rather than from invert, but both native producers share metadata and can share defects. Authored unit inputs pin the comparison's reference resolution and mismatch sensitivity; this native parity helper cannot independently establish producer correctness.
 * @evidence contracts/testing.md#distinguishing-cases The helper owns the comparison policy only (descriptions skipped, members as a set); the type families are supplied by the invert cases.
 * @evidence contracts/testing.md#execution-ownership Native inversion cases call this helper from test:integration; the explicitly registered test_llm_invert_oracle_references unit case supplies authored schemas without a native producer. The helper's actual operations are portable TypeScript.
 * @evidence contracts/common.md#principled-implementation Private normalization expands own local reference targets after URI-fragment and RFC 6901 token decoding, overlays each reference's siblings and sorts union signatures without descriptions. Separate alias-chain and recursive-graph sets reject empty alias cycles while terminating object back-edges; malformed or missing targets fail the comparison. Default/example payloads remain literal values rather than reference graphs.
 * @evidence contracts/common.md#clear-and-simple-design One inversion call and one comparison own the assertion. Private normalize and signature isolate reference expansion and ordering from the converter; per-branch sets keep sibling branches independent and no normalization state survives a call.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The comparison decodes references from their values and requires own entries, with no named-fixture branch or missing-target fallback. Its independent pointer reader preserves intermediate reference siblings that a root-only terminal resolver would erase; authored unit controls exercise this oracle directly.
 * @evidence contracts/common.md#meaningful-documentation Native prose states ignored descriptions, union ordering, missing/alias-cycle failures and the retained recursive-name limitation so callers know which equivalence this helper establishes.
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
  aliases: Set<string> = new Set(),
): unknown => {
  if (Array.isArray(schema))
    return schema.map((elem) => normalize(components, elem, visited));
  if (typeof schema !== "object" || schema === null) return schema;
  const record = schema as Record<string, unknown>;
  if (typeof record.$ref === "string") {
    const prefix = "#/components/schemas/";
    if (record.$ref.startsWith(prefix) === false)
      throw new Error(`Unsupported schema reference: ${record.$ref}`);
    let token: string = record.$ref.slice(prefix.length);
    try {
      token = decodeURIComponent(token);
    } catch {
      // Match the component reader's literal-percent policy.
    }
    if (token.includes("/") || /~(?:[^01]|$)/.test(token))
      throw new Error(`Malformed schema reference: ${record.$ref}`);
    const key: string = token.replace(/~1/g, "/").replace(/~0/g, "~");
    if (!Object.hasOwn(components.schemas ?? {}, key))
      throw new Error(`Missing schema reference: ${record.$ref}`);
    const target: OpenApi.IJsonSchema | undefined = components.schemas?.[key];
    if (target === undefined)
      throw new Error(`Undefined schema reference: ${record.$ref}`);
    if (aliases.has(key))
      throw new Error(`Cyclic schema aliases: ${record.$ref}`);
    if (visited.has(key)) return record;
    // SIBLINGS OF THE REFERENCE, SUCH AS ITS DESCRIPTION, OVERLAY THE TARGET
    const { $ref: _ref, ...siblings } = record;
    return {
      ...(normalize(
        components,
        target,
        new Set([...visited, key]),
        new Set([...aliases, key]),
      ) as object),
      ...(normalize(components, siblings, visited) as object),
    };
  }
  const output: Record<string, unknown> = Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      key === "default" || key === "example" || key === "examples"
        ? value
        : normalize(components, value, visited),
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
