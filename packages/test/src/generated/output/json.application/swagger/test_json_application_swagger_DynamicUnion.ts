import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";

export const test_json_application_swagger_DynamicUnion =
  _test_json_application("swagger")("DynamicUnion")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            "^(prefix_(.*))": {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            "((.*)_postfix)$": {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            "^(value_between_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$":
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
          },
          additionalProperties: {
            oneOf: [
              {
                "x-typia-required": false,
                type: "string",
              },
              {
                "x-typia-required": false,
                type: "number",
              },
            ],
            "x-typia-required": false,
          },
        },
      },
    },
    purpose: "swagger",
  });
