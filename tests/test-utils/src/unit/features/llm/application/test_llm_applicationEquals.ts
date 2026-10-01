import type { IHttpLlmFunction, IValidation, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification Direct HttpLlm.application composition and its function.validate closure must reject a surplus body property in equals mode while accepting the same input in ordinary mode. The original result-success and result-errors assertions remain.
 * @evidence contracts/testing.md#independent-expectations The authored OpenAPI schema requires one numeric value field, and IHttpLlmApplication.IConfig.equals defines rejection of surplus properties. Literal input and diagnostic expectations follow those contracts rather than another validator's output.
 * @evidence contracts/testing.md#distinguishing-cases The same body is checked with equals true and false. Clean numeric data succeeds, surplus data differs only by equals mode, and missing or string-valued required data fails in both modes; the original undefined expectation remains checked on strict surplus rejection.
 * @evidence contracts/testing.md#execution-ownership The exported test_llm_applicationEquals case is registered by test-utils unit node:test runner under its plugin-free configuration. HttpLlm and the independent oracle are called directly; no schema producer, installed consumer, HTTP transport or native artifact is needed.
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
