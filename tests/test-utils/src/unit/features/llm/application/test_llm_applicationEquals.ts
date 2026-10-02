import type { IHttpLlmFunction, IValidation, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies HTTP LLM validation rejects surplus fields only in equals mode.
 *
 * The validator closes over the OpenAPI document and the configured equals
 * flag. Direct composition distinguishes strict rejection from ordinary
 * validation without requiring a compiler-produced schema or native host.
 *
 * 1. Compose one authored request-body schema with both equals settings.
 * 2. Preserve the original surplus-field rejection and diagnostic assertion.
 * 3. Check valid, wrong-type, missing-field and surplus-field inputs in both
 *    modes.
 */
export const test_llm_applicationEquals = (): void => {
  const application = HttpLlm.application({
    document,
    config: { equals: true },
  });
  TestEquality.equals("strict-functions", application.functions.length, 1);
  TestEquality.equals("strict-errors", application.errors, []);
  const func: IHttpLlmFunction = application.functions[0]!;
  const result: IValidation<unknown> = func.validate({
    body: { value: 1, superfluous: "property" },
  });
  TestEquality.equals("result-success", result.success, false);
  if (!result.success)
    TestEquality.subset(
      "result-errors",
      [{ expected: "undefined" }],
      result.errors,
    );

  for (const equals of [true, false]) {
    const app = HttpLlm.application({ document, config: { equals } });
    TestEquality.equals(`${equals}-functions`, app.functions.length, 1);
    TestEquality.equals(`${equals}-errors`, app.errors, []);
    const validate = app.functions[0]!.validate;
    for (const [name, input, expected] of [
      ["clean", { body: { value: 1 } }, true],
      ["surplus", { body: { value: 1, superfluous: "property" } }, !equals],
      ["missing", { body: {} }, false],
      ["wrong-type", { body: { value: "1" } }, false],
    ] as const)
      TestEquality.equals(
        `${equals}-${name}`,
        validate(input).success,
        expected,
      );
  }
};

const document: OpenApi.IDocument = {
  openapi: "3.2.0",
  "x-typia-emended-v12": true,
  components: {},
  paths: {
    "/validateEquals": {
      post: {
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: { value: { type: "number" } },
                required: ["value"],
              },
            },
          },
          description: "Validate LLM application equals",
        },
      },
    },
  },
};
