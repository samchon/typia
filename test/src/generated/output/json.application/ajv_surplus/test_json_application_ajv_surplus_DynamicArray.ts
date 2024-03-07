import typia from "typia";
import { DynamicArray } from "../../../../structures/DynamicArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_DynamicArray =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
