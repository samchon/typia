import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.json.schema emits the OpenAPI 3.0 dialect under "3.0".
 *
 * `json.schema` routes through the same collection writer as `json.schemas`, so
 * the dialect defect was shared: fixing one entry point and leaving the others
 * would still ship a 3.1 document labeled "3.0". This pins the singular entry
 * point, whose root schema is additionally dereferenced out of the components.
 *
 * 1. Declare a type carrying a nullable atomic, a literal union, and a tuple.
 * 2. Emit its single schema under "3.0".
 * 3. Assert the dereferenced root uses the 3.0 spellings only.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (version; dereferenced root; no … under 3.0). The case documents its purpose as: Verifies typia.json.schema emits the OpenAPI 3.0 dialect under "3.0".
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `json.schema` routes through the same collection writer as `json.schemas`, so the dialect defect was shared: fixing one entry point and leaving the others would still ship a 3.1 document labeled "3.0". This pins the singular entry point, whose root schema is additionally dereferenced out of the components. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (version; dereferenced root; no … under 3.0) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_v3_0_dialect is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_v3_0_dialect = (): void => {
  interface IV3Single {
    nullableName: string | null;
    literal: "alpha" | "beta";
    pair: [string, number];
  }

  const unit = typia.json.schema<IV3Single, "3.0">();
  TestEquality.equals("version", unit.version, "3.0");
  TestEquality.equals("dereferenced root", clean(unit.schema), {
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
    TestEquality.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
