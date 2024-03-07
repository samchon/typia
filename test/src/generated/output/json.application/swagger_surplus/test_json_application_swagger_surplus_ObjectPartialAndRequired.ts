import typia from "typia";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectPartialAndRequired =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectPartialAndRequired",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPartialAndRequired",
      },
    ],
    components: {
      schemas: {
        ObjectPartialAndRequired: {
          type: "object",
          properties: {
            string: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            number: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            boolean: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            object: {
              $ref: "#/components/schemas/ObjectPartialAndRequired.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["object", "array"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPartialAndRequired.Nullable": {
          type: "object",
          properties: {
            string: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            number: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            boolean: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            object: {
              $ref: "#/components/schemas/ObjectPartialAndRequired.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["object", "array"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
