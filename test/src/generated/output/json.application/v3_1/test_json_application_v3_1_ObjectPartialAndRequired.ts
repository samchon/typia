import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_v3_1_ObjectPartialAndRequired =
  _test_json_application({
    version: "3.1",
    name: "ObjectPartialAndRequired",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectPartialAndRequired: {
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
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPartialAndRequired",
      },
    ],
  });
