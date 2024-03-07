import typia from "typia";
import { DynamicComposite } from "../../../../structures/DynamicComposite";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_DynamicComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicComposite",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicComposite",
      },
    ],
    components: {
      schemas: {
        DynamicComposite: {
          $id: "#/components/schemas/DynamicComposite",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
          patternProperties: {
            "^[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$": {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            "^(prefix_(.*))": {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            "((.*)_postfix)$": {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            "^(value_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            "^(between_(.*)_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
