import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_ajv_surplus_ObjectPartialAndRequired =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ObjectPartialAndRequired",
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
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPartialAndRequired",
                },
              ],
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
          required: ["object", "array"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
