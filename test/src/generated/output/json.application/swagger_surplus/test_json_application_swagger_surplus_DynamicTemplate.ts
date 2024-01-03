import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_json_application_swagger_surplus_DynamicTemplate =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {},
          nullable: false,
          "x-typia-jsDocTags": [],
          "x-typia-patternProperties": {
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
          additionalProperties: {
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
            "x-typia-required": false,
          },
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
