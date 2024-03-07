import typia from "typia";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_DynamicTemplate =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicTemplate",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicTemplate",
      },
    ],
    components: {
      schemas: {
        DynamicTemplate: {
          $id: "#/components/schemas/DynamicTemplate",
          type: "object",
          properties: {},
          "x-typia-jsDocTags": [],
          patternProperties: {
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
              type: "number",
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
