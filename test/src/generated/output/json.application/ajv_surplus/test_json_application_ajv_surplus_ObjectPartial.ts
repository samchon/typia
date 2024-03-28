import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartial } from "../../../../structures/ObjectPartial";

export const test_json_application_ajv_surplus_ObjectPartial =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectPartial",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/PartialObjectPartial.IBase",
      },
    ],
    components: {
      schemas: {
        "PartialObjectPartial.IBase": {
          $id: "#/components/schemas/PartialObjectPartial.IBase",
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
                  $ref: "#/components/schemas/ObjectPartial.IBase",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": true,
            },
          },
          description: "Make all properties in T optional",
          "x-typia-jsDocTags": [],
        },
        "ObjectPartial.IBase": {
          $id: "#/components/schemas/ObjectPartial.IBase",
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
                  $ref: "#/components/schemas/ObjectPartial.IBase",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["boolean", "number", "string", "array", "object"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
