import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_ajv_surplus_ObjectRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectRequired",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/RequiredObjectRequired.IBase",
      },
    ],
    components: {
      schemas: {
        "RequiredObjectRequired.IBase": {
          $id: "#/components/schemas/RequiredObjectRequired.IBase",
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            number: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            string: {
              type: "string",
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
            object: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectRequired.IBase",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["boolean", "number", "string", "array", "object"],
          description: "Make all properties in T required",
          "x-typia-jsDocTags": [],
        },
        "ObjectRequired.IBase": {
          $id: "#/components/schemas/ObjectRequired.IBase",
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            number: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            string: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            object: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectRequired.IBase",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": true,
            },
          },
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
