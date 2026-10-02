import { OpenApiV3_1 } from "@typia/interface";

/**
 * Minimal OpenAPI v3.1 document serving one calculator operation.
 *
 * Fixture for the HTTP-controller tests: `POST /calculator/add` takes a `{ x, y
 * }` body and answers `{ value }`, so both the reflected input schema and the
 * structured output path can be asserted without a network.
 *
 * @evidence contracts/testing.md#behavioral-verification This authored fixture supplies one POST calculator body/result schema; http_controller_register checks adapter population and SDK-facing tool members. It owns no assertions itself.
 * @evidence contracts/testing.md#independent-expectations Literal x/y/value numeric schemas are input metadata, not generated expected output. The registration case honestly compares population to the composed controller rather than independently proving composition.
 * @evidence contracts/testing.md#distinguishing-cases One calculator operation supplies portable HTTP registration; the separate handwritten nested document in http_controller_output_validation owns valid/wrong-body and callback-exception distinctions.
 * @evidence contracts/testing.md#execution-ownership The plugin-free unit runner registers http_controller_register, which calls document; this namespace and factory support that case without network or native production.
 */
export namespace CalculatorApi {
  /** API version declared in the document's `info`. */
  export const VERSION = "3.2.1";

  /**
   * Compose the authored one-operation OpenAPI fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification This factory supplies HTTP registration metadata; http_controller_register checks composed function/tool population and each description/schema/execute member.
   * @evidence contracts/testing.md#independent-expectations Literal numeric x/y request and value response schemas are authored inputs; the registration case does not claim an independent full composition oracle.
   * @evidence contracts/testing.md#distinguishing-cases One POST body operation owns registration support; nested output success/error and callback exceptions belong to a separate authored document in http_controller_output_validation.
   * @evidence contracts/testing.md#execution-ownership The plugin-free registered HTTP registration case calls this factory. No generated typia factory or actual HTTP host runs here.
   */
  export const document = (): OpenApiV3_1.IDocument => ({
    openapi: "3.1.0",
    info: { title: "Calculator API", version: VERSION },
    paths: {
      "/calculator/add": {
        post: {
          description: "Add two numbers.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    x: { type: "number" },
                    y: { type: "number" },
                  },
                  required: ["x", "y"],
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Sum of the two numbers.",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      value: { type: "number" },
                    },
                    required: ["value"],
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {},
  });
}
