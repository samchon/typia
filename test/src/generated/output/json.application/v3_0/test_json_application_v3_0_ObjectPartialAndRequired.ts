import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_v3_0_ObjectPartialAndRequired =
  _test_json_application({
    version: "3.0",
    name: "ObjectPartialAndRequired",
  })({
    version: "3.0",
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
              $ref: "#/components/schemas/ObjectPartialAndRequired.Nullable",
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
          },
          nullable: false,
          required: ["object", "array"],
        },
        "ObjectPartialAndRequired.Nullable": {
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
              $ref: "#/components/schemas/ObjectPartialAndRequired.Nullable",
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
          },
          nullable: true,
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
