import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_json_application_swagger_DynamicTemplate =
  _test_json_application("swagger")("DynamicTemplate")({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicTemplate",
      },
    ],
    components: {
      schemas: {
        DynamicTemplate: {
          type: "object",
          properties: {},
          nullable: false,
          "x-typia-jsDocTags": [],
          "x-typia-patternProperties": {
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
            "^(value_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            "^(between_(.*)_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
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
              {
                "x-typia-required": false,
                type: "boolean",
              },
            ],
            "x-typia-required": false,
          },
        },
      },
    },
    purpose: "swagger",
  });
