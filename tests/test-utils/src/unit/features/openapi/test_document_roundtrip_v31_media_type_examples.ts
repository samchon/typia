import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies media type examples remain named maps during document round trip.
 *
 * Schema Object `examples` and Media Type Object `examples` have different
 * shapes in raw OpenAPI 3.1. This test keeps both in the same document so the
 * converter cannot accidentally apply the Schema Object array rule to media
 * examples.
 *
 * 1. Upgrade an OpenAPI 3.1 document with schema examples arrays and media
 *    examples maps.
 * 2. Assert the emended document resolves example references and keeps media
 *    examples as a map.
 * 3. Downgrade back to OpenAPI 3.1 and assert schema examples are arrays while
 *    media examples remain a map.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter upgrades and downgrades an authored 3.1 document and the media examples map and schema examples array are compared after each step, so applying the schema array rule to media examples fails.
 * @evidence contracts/testing.md#independent-expectations The OpenAPI 3.1 shapes (array for Schema Object examples, named map for Media Type Object examples) are authored expectations independent of the converter.
 * @evidence contracts/testing.md#distinguishing-cases Both example kinds in one document distinguish the two rules; response media examples and header examples are not covered.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored document with no native build, installation or host.
 */
export const test_document_roundtrip_v31_media_type_examples = (): void => {
  const input: OpenApiV3_1.IDocument = {
    openapi: "3.1.0",
    info: {
      title: "Examples",
      version: "1.0.0",
    },
    components: {
      examples: {
        beta: {
          value: {
            name: "beta",
          },
        },
      },
    },
    paths: {
      "/users": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  examples: [{ name: "alpha" }, { name: "beta" }],
                  properties: {
                    name: {
                      type: "string",
                      examples: ["alpha", "beta"],
                    },
                  },
                  required: ["name"],
                },
                examples: {
                  alpha: {
                    value: {
                      name: "alpha",
                    },
                  },
                  beta: {
                    $ref: "#/components/examples/beta",
                  },
                },
              },
            },
          },
          responses: {
            "204": {
              description: "No Content",
            },
          },
        },
      },
    },
  };

  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(input);
  const upgradedMedia =
    upgraded.paths?.["/users"]?.post?.requestBody?.content?.[
      "application/json"
    ];
  TestEquality.equals("upgraded media", upgradedMedia, {
    schema: {
      type: "object",
      examples: {
        v0: { name: "alpha" },
        v1: { name: "beta" },
      },
      properties: {
        name: {
          type: "string",
          examples: {
            v0: "alpha",
            v1: "beta",
          },
        },
      },
      required: ["name"],
    },
    examples: {
      alpha: {
        value: {
          name: "alpha",
        },
      },
      beta: {
        value: {
          name: "beta",
        },
      },
    },
  });

  const downgraded: OpenApiV3_1.IDocument = OpenApiConverter.downgradeDocument(
    upgraded,
    "3.1",
  );
  const downgradedMedia = (
    downgraded.paths?.["/users"]?.post?.requestBody as
      | OpenApiV3_1.IOperation.IRequestBody
      | undefined
  )?.content?.["application/json"];
  TestEquality.equals("downgraded media", downgradedMedia, {
    schema: {
      type: "object",
      examples: [{ name: "alpha" }, { name: "beta" }],
      properties: {
        name: {
          type: "string",
          examples: ["alpha", "beta"],
        },
      },
      required: ["name"],
    },
    examples: {
      alpha: {
        value: {
          name: "alpha",
        },
      },
      beta: {
        value: {
          name: "beta",
        },
      },
    },
  });
};
