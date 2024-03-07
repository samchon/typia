import typia from "typia";
import { DynamicUnion } from "../../../../structures/DynamicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_DynamicUnion =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {},
          nullable: false,
          "x-typia-jsDocTags": [],
          "x-typia-patternProperties": {
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
          additionalProperties: {
            oneOf: [
              {
                type: "string",
              },
              {
                type: "number",
              },
            ],
            "x-typia-required": false,
          },
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
