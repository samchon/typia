import typia from "typia";
import { DynamicArray } from "../../../../structures/DynamicArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_DynamicArray =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              nullable: false,
              "x-typia-additionalProperties": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-typia-required": true,
                "x-typia-optional": false,
              },
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
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
