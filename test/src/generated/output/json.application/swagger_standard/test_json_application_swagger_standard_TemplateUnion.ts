import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateUnion } from "../../../../structures/TemplateUnion";

export const test_json_application_swagger_standard_TemplateUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TemplateUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TemplateUnion",
      },
    ],
    components: {
      schemas: {
        TemplateUnion: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TemplateUnion.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "TemplateUnion.Type": {
          type: "object",
          properties: {
            prefix: {
              type: "string",
              pattern:
                "^((prefix_(.*))|(prefix_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?))$",
            },
            postfix: {
              type: "string",
              pattern:
                "(((.*)_postfix)|([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_postfix))$",
            },
            middle: {
              type: "string",
              pattern:
                "^(the_false_value|the_true_value|(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value))$",
            },
            mixed: {
              oneOf: [
                {
                  type: "string",
                  pattern:
                    "^(the_A_value|the_B_value|[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|true|false|(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value))$",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
                {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                    },
                  },
                  nullable: false,
                  required: ["name"],
                },
              ],
            },
          },
          nullable: false,
          required: ["prefix", "postfix", "middle", "mixed"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
