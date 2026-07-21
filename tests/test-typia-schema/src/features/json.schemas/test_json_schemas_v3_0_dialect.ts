import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.json.schemas emits the OpenAPI 3.0 dialect under "3.0".
 *
 * The "3.0" writer used to build the 3.1 document and rewrite only its version
 * string, so a document declaring 3.0 still carried the three constructs 3.0
 * does not define: a `{"type": "null"}` union member instead of the `nullable`
 * flag, `const`, and `prefixItems`. The expectations below come from the
 * OpenAPI 3.0 specification, not from what the emitter happens to produce.
 *
 * 1. Declare a type carrying a nullable atomic, a string literal union, and a
 *    tuple — one witness for each dialect difference.
 * 2. Emit its schema collection under "3.0".
 * 3. Assert the 3.0 spellings are used and that no 3.1-only keyword survives.
 */
export const test_json_schemas_v3_0_dialect = (): void => {
  interface IV3Target {
    nullableName: string | null;
    literal: "alpha" | "beta";
    pair: [string, number];
  }

  const collection = typia.json.schemas<[IV3Target], "3.0">();
  TestValidator.equals("collection version", collection.version, "3.0");
  TestValidator.equals("root reference", clean(collection.schemas), [
    { $ref: "#/components/schemas/IV3Target" },
  ]);
  TestValidator.equals(
    "downgraded component",
    clean(collection.components.schemas?.IV3Target),
    {
      type: "object",
      properties: {
        // 3.0 has no `{"type": "null"}` union member; nullability is a flag.
        nullableName: { type: "string", nullable: true },
        // 3.0 has no `const`; a literal is a single-valued `enum`.
        literal: { type: "string", enum: ["alpha", "beta"] },
        // 3.0 has no `prefixItems`; a tuple degrades to a bounded array.
        pair: {
          type: "array",
          items: { oneOf: [{ type: "string" }, { type: "number" }] },
          minItems: 2,
          maxItems: 2,
        },
      },
      required: ["nullableName", "literal", "pair"],
      additionalProperties: false,
    },
  );

  // The negative twin: no 3.1-only keyword may appear anywhere in the document.
  const serialized: string = JSON.stringify(collection);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestValidator.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
