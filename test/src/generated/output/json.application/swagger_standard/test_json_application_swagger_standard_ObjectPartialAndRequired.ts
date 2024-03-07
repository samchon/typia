import typia from "typia";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectPartialAndRequired =
  _test_json_application({
    purpose: "swagger",
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
    purpose: "swagger",
    surplus: false,
  });
