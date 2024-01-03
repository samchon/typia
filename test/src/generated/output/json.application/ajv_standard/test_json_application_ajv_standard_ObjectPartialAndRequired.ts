import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_ajv_standard_ObjectPartialAndRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            number: {
              type: "number",
            },
            boolean: {
              type: "boolean",
            },
            object: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPartialAndRequired",
                },
              ],
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
          },
          required: ["object", "array"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
