import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.json.schema emits the OpenAPI 3.0 dialect under "3.0".
 *
 * `json.schema` routes through the same collection writer as `json.schemas`, so
 * the dialect defect was shared: fixing one entry point and leaving the others
 * would still ship a 3.1 document labelled "3.0". This pins the singular entry
 * point, whose root schema is additionally dereferenced out of the components.
 *
 * 1. Declare a type carrying a nullable atomic, a literal union, and a tuple.
 * 2. Emit its single schema under "3.0".
 * 3. Assert the dereferenced root uses the 3.0 spellings only.
 */
export const test_json_schema_v3_0_dialect = (): void => {
  interface IV3Single {
    nullableName: string | null;
    literal: "alpha" | "beta";
    pair: [string, number];
  }

  const unit = typia.json.schema<IV3Single, "3.0">();
  TestValidator.equals("version", unit.version, "3.0");
  TestValidator.equals("dereferenced root", clean(unit.schema), {
    type: "object",
    properties: {
      nullableName: { type: "string", nullable: true },
      literal: { type: "string", enum: ["alpha", "beta"] },
      pair: {
        type: "array",
        items: { oneOf: [{ type: "string" }, { type: "number" }] },
        minItems: 2,
        maxItems: 2,
      },
    },
    required: ["nullableName", "literal", "pair"],
    additionalProperties: false,
  });

  const serialized: string = JSON.stringify(unit);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestValidator.equals(`no ${keyword} under 3.0`, serialized.includes(keyword), false);
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
