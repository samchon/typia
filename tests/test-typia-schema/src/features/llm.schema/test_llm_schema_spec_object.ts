import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

/**
 * Verifies that `typia.llm.schema` emits a correct object definition for an
 * interface with required, optional, and nullable fields.
 *
 * Named object types must be lifted into `$defs` and referenced via `$ref` at
 * the root. The `required` array must include only non-optional fields, and
 * nullable fields must emit `anyOf` with `null` and the base type. A regression
 * could silently include optional fields in `required` or drop the `anyOf`
 * wrapper.
 *
 * 1. Declare `IObjectSpec` with required `required`, optional `optional`, and
 *    nullable `nullable` fields.
 * 2. Call `typia.llm.schema<IObjectSpec>($defs)` and assert the root is a `$ref`.
 * 3. Assert `$defs.IObjectSpec` has correct properties, sorted `required`, and
 *    `anyOf` for nullable.
 */
export const test_llm_schema_spec_object = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IObjectSpec>($defs);
  TestValidator.equals("object top ref", clean(schema), {
    $ref: "#/$defs/IObjectSpec",
  });
  const def = clean($defs.IObjectSpec) as {
    type: string;
    properties: Record<string, unknown>;
    required: string[];
    additionalProperties: boolean;
    anyOf?: unknown[];
  };
  TestValidator.equals("object definition type", def?.type, "object");
  TestValidator.equals(
    "object definition required (sorted)",
    [...(def?.required ?? [])].sort(),
    ["nullable", "required"].sort(),
  );
  TestValidator.equals(
    "object definition additionalProperties",
    def?.additionalProperties,
    false,
  );
  TestValidator.equals(
    "object definition optional prop",
    def?.properties.optional,
    {
      type: "number",
    },
  );
  TestValidator.equals(
    "object definition required prop",
    def?.properties.required,
    {
      type: "string",
    },
  );
  const nullableProp = def?.properties.nullable as
    | { anyOf?: unknown[] }
    | undefined;
  TestValidator.predicate("nullable anyOf present", () =>
    Array.isArray(nullableProp?.anyOf),
  );
  TestValidator.equals(
    "nullable anyOf (sorted)",
    [...(nullableProp?.anyOf ?? [])].sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b)),
    ),
    [{ type: "boolean" }, { type: "null" }].sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b)),
    ),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
