import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.application is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (version; tuple parameter; literal parameter; nullable output; no … under 3.0). The case documents its purpose as: Verifies typia.json.application emits the OpenAPI 3.0 dialect under "3.0".
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `json.application` is the third entry point sharing the collection writer that relabeled a 3.1 document as "3.0". Its function parameter and return schemas are filled from that same collection, so an application document is exactly as mislabeled as a bare schema — and no test knew the dialect here either. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (version; tuple parameter; literal parameter; nullable output; no … under 3.0) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_application_v3_0_dialect is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_application_v3_0_dialect = (): void => {
  interface IV3Controller {
    lookup(pair: [string, number], literal: "alpha" | "beta"): string | null;
  }

  const app = typia.json.application<IV3Controller, "3.0">();
  TestEquality.equals("version", app.version, "3.0");

  const fn = app.functions[0]!;
  TestEquality.equals("tuple parameter", clean(fn.parameters[0]!.schema), {
    type: "array",
    items: { oneOf: [{ type: "string" }, { type: "number" }] },
    minItems: 2,
    maxItems: 2,
  });
  TestEquality.equals("literal parameter", clean(fn.parameters[1]!.schema), {
    type: "string",
    enum: ["alpha", "beta"],
  });
  TestEquality.equals("nullable output", clean(fn.output?.schema), {
    type: "string",
    nullable: true,
  });

  const serialized: string = JSON.stringify(app);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestEquality.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
