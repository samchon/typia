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
 * 2. Reject unsupported server metadata, incomplete request media, and mixed
 *    form/non-form request media.
 * 3. Attempt to downgrade request and response media entries with different
 *    schemas or unrepresentable examples.
 * 4. Assert every lossy case reports an explicit representability error.
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
      name: "unsupported server scheme",
      input: document({ servers: [{ url: "ftp://api.example.com/v1" }] }),
    },
    {
      name: "server credentials",
      input: document({
        servers: [{ url: "https://user:secret@api.example.com/v1" }],
      }),
    },
    {
      name: "server description",
      input: document({
        servers: [
          { url: "https://api.example.com/v1", description: "Production" },
        ],
      }),
    },
    {
      name: "mixed form and body media",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: { type: "object", properties: {} },
                  },
                  "application/json": {
                    schema: { type: "object", properties: {} },
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "request body without content",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {},
            },
          },
        },
      }),
    },
    {
      name: "request body with empty content",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: { content: {} },
            },
          },
        },
      }),
    },
    {
      name: "request media without schema",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: { "application/json": {} },
              },
            },
          },
        },
      }),
    },
    {
      name: "form body without fields",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: { type: "object", properties: {} },
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "required undefined form field",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                required: true,
                content: {
                  "multipart/form-data": {
                    schema: {
                      type: "object",
                      properties: { file: undefined },
                      required: ["file"],
                    } as unknown as OpenApi.IJsonSchema,
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "required form body without required field",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                required: true,
                content: {
                  "multipart/form-data": {
                    schema: {
                      type: "object",
                      properties: {
                        file: { type: "string", format: "binary" },
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
    {
      name: "optional form body with required field",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "application/x-www-form-urlencoded": {
                    schema: {
                      type: "object",
                      properties: { name: { type: "string" } },
                      required: ["name"],
                    },
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "form object metadata",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: {
                      type: "object",
                      description: "Upload form",
                      properties: {},
                    },
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "referenced form object metadata",
      input: document({
        components: {
          schemas: {
            Form: {
              type: "object",
              properties: { name: { type: "string" } },
            },
          },
        },
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: {
                      $ref: "#/components/schemas/Form",
                      description: "Upload form",
                    },
                  },
                },
              },
            },
          },
        },
      }),
    },
    {
      name: "closed form object",
      input: document({
        paths: {
          "/items": {
            post: {
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: {
                      type: "object",
                      properties: {},
                      additionalProperties: false,
                    },
                  },
                },
              },
            },
          },
        },
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
      name: "response media without schema or example",
      input: document({
        paths: {
          "/items": {
            get: {
              responses: {
                "200": { content: { "text/plain": {} } },
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
    assertThrows(entry.name, () =>
      OpenApiConverter.downgradeDocument(entry.input, "2.0"),
    );
};

const assertThrows = (title: string, task: () => unknown): void => {
  let thrown: boolean = false;
  try {
    task();
  } catch {
    thrown = true;
  }
  TestValidator.predicate(title, thrown);
};
