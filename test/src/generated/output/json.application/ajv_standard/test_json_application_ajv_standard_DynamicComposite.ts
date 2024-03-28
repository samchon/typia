import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";

export const test_json_application_ajv_standard_DynamicComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "name"],
          patternProperties: {
            "^[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$": {
              type: "number",
            },
            "^(prefix_(.*))": {
              type: "string",
            },
            "((.*)_postfix)$": {
              type: "string",
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
            },
            "^(between_(.*)_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              type: "boolean",
            },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
