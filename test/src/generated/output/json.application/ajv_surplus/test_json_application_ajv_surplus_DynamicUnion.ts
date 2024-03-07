import typia from "typia";
import { DynamicUnion } from "../../../../structures/DynamicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_DynamicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicUnion",
      },
    ],
    components: {
      schemas: {
        DynamicUnion: {
          $id: "#/components/schemas/DynamicUnion",
          type: "object",
          properties: {},
          "x-typia-jsDocTags": [],
          patternProperties: {
            "^[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$": {
              type: "string",
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
            "^(value_between_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$":
              {
                type: "number",
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
