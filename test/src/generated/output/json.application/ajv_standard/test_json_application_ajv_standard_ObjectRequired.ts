import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_ajv_standard_ObjectRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            number: {
              type: "number",
            },
            string: {
              type: "string",
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
            object: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectRequired.IBase",
                },
              ],
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
            },
            number: {
              type: "number",
            },
            string: {
              type: "string",
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
            object: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectRequired.IBase",
                },
              ],
            },
          },
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
