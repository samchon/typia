import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.json.application emits the OpenAPI 3.0 dialect under "3.0".
 *
 * `json.application` is the third entry point sharing the collection writer
 * that relabeled a 3.1 document as "3.0". Its function parameter and return
 * schemas are filled from that same collection, so an application document is
 * exactly as mislabeled as a bare schema — and no test knew the dialect here
 * either.
 *
 * 1. Declare a controller whose method takes a tuple and a literal union and
 *    returns a nullable type.
 * 2. Emit its application document under "3.0".
 * 3. Assert the parameter and return schemas use the 3.0 spellings only.
 */
export const test_json_application_v3_0_dialect = (): void => {
  interface IV3Controller {
    lookup(pair: [string, number], literal: "alpha" | "beta"): string | null;
  }

  const app = typia.json.application<IV3Controller, "3.0">();
  TestValidator.equals("version", app.version, "3.0");

  const fn = app.functions[0]!;
  TestValidator.equals("tuple parameter", clean(fn.parameters[0]!.schema), {
    type: "array",
    items: { oneOf: [{ type: "string" }, { type: "number" }] },
    minItems: 2,
    maxItems: 2,
  });
  TestValidator.equals("literal parameter", clean(fn.parameters[1]!.schema), {
    type: "string",
    enum: ["alpha", "beta"],
  });
  TestValidator.equals("nullable output", clean(fn.output?.schema), {
    type: "string",
    nullable: true,
  });

  const serialized: string = JSON.stringify(app);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestValidator.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
