import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";

export const test_json_application_swagger_surplus_DynamicComposite =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
          "x-typia-patternProperties": {
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
          additionalProperties: {
            oneOf: [
              {
                type: "number",
              },
              {
                type: "string",
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
