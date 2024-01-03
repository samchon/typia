import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

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
              "x-typia-jsDocTags": [],
              additionalProperties: {
                type: "array",
                items: {
                  type: "string",
                },
              },
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
