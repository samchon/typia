import typia from "typia";
import { ToJsonArray } from "../../../../structures/ToJsonArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ToJsonArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonArray",
      },
    ],
    components: {
      schemas: {
        ToJsonArray: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "boolean",
                },
              },
              {
                type: "array",
                items: {
                  type: "number",
                },
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ToJsonArray.IObject",
                },
              },
            ],
          },
          minItems: 4,
          maxItems: 4,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                type: "array",
                items: {
                  type: "boolean",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  type: "number",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ToJsonArray.IObject",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 4,
            maxItems: 4,
          },
        },
        "ToJsonArray.IObject": {
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
