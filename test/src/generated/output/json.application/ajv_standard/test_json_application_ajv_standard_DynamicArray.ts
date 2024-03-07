import typia from "typia";
import { DynamicArray } from "../../../../structures/DynamicArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_DynamicArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicArray",
      },
    ],
    components: {
      schemas: {
        DynamicArray: {
          $id: "#/components/schemas/DynamicArray",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              additionalProperties: {
                type: "array",
                items: {
                  type: "string",
                },
              },
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
