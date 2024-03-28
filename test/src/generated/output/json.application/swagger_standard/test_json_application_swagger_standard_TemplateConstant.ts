import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";

export const test_json_application_swagger_standard_TemplateConstant =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TemplateConstant",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TemplateConstant",
      },
    ],
    components: {
      schemas: {
        TemplateConstant: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TemplateConstant.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "TemplateConstant.Type": {
          type: "object",
          properties: {
            prefix: {
              type: "string",
              enum: ["prefix_A", "prefix_B", "prefix_C"],
            },
            postfix: {
              type: "string",
              enum: ["1_postfix", "2_postfix", "3_postfix"],
            },
            combined: {
              type: "string",
              enum: [
                "the_1_value_with_label_A",
                "the_1_value_with_label_B",
                "the_1_value_with_label_C",
                "the_2_value_with_label_A",
                "the_2_value_with_label_B",
                "the_2_value_with_label_C",
                "the_3_value_with_label_A",
                "the_3_value_with_label_B",
                "the_3_value_with_label_C",
              ],
            },
          },
          nullable: false,
          required: ["prefix", "postfix", "combined"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
