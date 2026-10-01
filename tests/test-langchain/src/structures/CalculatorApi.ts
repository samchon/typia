import { OpenApiV3_1 } from "@typia/interface";

/**
 * Minimal OpenAPI v3.1 document serving one calculator operation.
 *
 * Fixture for the HTTP-controller tests: `POST /calculator/add` takes a `{ x, y
 * }` body and answers `{ value }`, so both the reflected input schema and the
 * structured output path can be asserted without a network.
 */
export namespace CalculatorApi {
  /** API version declared in the document's `info`. */
  export const VERSION = "3.2.1";

  /** Compose the OpenAPI document. */
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
