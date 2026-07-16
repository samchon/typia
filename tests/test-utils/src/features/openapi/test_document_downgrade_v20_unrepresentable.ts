import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger 2 downgrade rejects metadata it cannot represent exactly.
 *
 * Swagger can encode multiple schemes for one host/basePath and one schema per
 * request or response. Selecting the first incompatible server or media entry
 * silently redirects requests or changes payload contracts.
 *
 * 1. Attempt to downgrade servers with different authorities and server variables.
 * 2. Attempt to downgrade request and response media entries with different
 *    schemas.
 * 3. Assert every lossy case reports an explicit representability error.
 */
export const test_document_downgrade_v20_unrepresentable = (): void => {
  const document = (props: Partial<OpenApi.IDocument>): OpenApi.IDocument => ({
    openapi: "3.2.0",
    components: {},
    paths: {},
    "x-typia-emended-v12": true,
    ...props,
  });
  const cases: Array<{ name: string; input: OpenApi.IDocument }> = [
    {
      name: "different server authorities",
      input: document({
        servers: [
          { url: "https://api.example.com/v1" },
          { url: "https://other.example.com/v1" },
        ],
      }),
    },
    {
      name: "server variables",
      input: document({
        servers: [
          {
            url: "https://{region}.example.com/v1",
            variables: { region: { default: "us" } },
          },
        ],
      }),
    },
    {
      name: "request media schemas",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "application/json": { schema: { type: "string" } },
                  "application/xml": { schema: { type: "number" } },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "response media schemas",
      input: document({
        paths: {
          "/items": {
            get: {
              responses: {
                "200": {
                  content: {
                    "application/json": { schema: { type: "string" } },
                    "application/xml": { schema: { type: "number" } },
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "request body example",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "application/json": {
                    schema: { type: "string" },
                    example: "sample",
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "named response examples",
      input: document({
        paths: {
          "/items": {
            get: {
              responses: {
                "200": {
                  content: {
                    "application/json": {
                      schema: { type: "string" },
                      examples: {
                        sample: { value: "sample" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }),
    },
  ];

  for (const entry of cases)
    TestValidator.error(entry.name, () =>
      OpenApiConverter.downgradeDocument(entry.input, "2.0"),
    );
};
