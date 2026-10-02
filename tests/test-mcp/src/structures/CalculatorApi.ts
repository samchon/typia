import { OpenApiV3_1 } from "@typia/interface";

/**
 * Minimal OpenAPI v3.1 document serving one calculator operation.
 *
 * Fixture for the HTTP-controller tests: `POST /calculator/add` takes a `{ x, y
 * }` body and answers `{ value }`, so both the reflected input schema and the
 * structured output path can be asserted without a network.
 *
 * @evidence contracts/testing.md#behavioral-verification http_controller_execute asserts listed operation propagation, outputSchema presence and structured sum 15 with empty text; HTTP version cases assert info.version inheritance and explicit override.
 * @evidence contracts/testing.md#independent-expectations Authored numeric body and response schemas, arithmetic executor and version 3.2.1 provide input independently of HttpLlm conversion.
 * @evidence contracts/testing.md#distinguishing-cases The portable execution case has no transport; SDK handshake version cases own inferred versus explicitly overridden version distinctions.
 * @evidence contracts/testing.md#execution-ownership node:test unit registration owns the portable execution case; DynamicExecutor integration exports own actual SDK version handshakes.
 */
export namespace CalculatorApi {
  /** API version declared in the document's `info`. */
  export const VERSION = "3.2.1";

  /**
   * Compose the OpenAPI document.
   *
   * @evidence contracts/testing.md#behavioral-verification Consumers reflect POST /calculator/add and assert registered execution or public SDK version handshake; this composer itself owns no assertions.
   * @evidence contracts/testing.md#independent-expectations The authored required numeric x/y and value properties plus info.version are independent fixture input to HttpLlm.controller.
   * @evidence contracts/testing.md#distinguishing-cases One operation and a fresh document per call support isolated consumers; version cases vary the explicit server option while reusing this document shape.
   * @evidence contracts/testing.md#execution-ownership http_controller_execute runs plugin-free under node:test; http_controller_version and version_override run their SDK connection under DynamicExecutor.
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
