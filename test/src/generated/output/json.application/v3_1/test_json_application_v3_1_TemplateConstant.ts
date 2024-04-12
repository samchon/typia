import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";

export const test_json_application_v3_1_TemplateConstant =
  _test_json_application({
    version: "3.1",
    name: "TemplateConstant",
  })({
    version: "3.1",
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
          required: ["value"],
        },
        "TemplateConstant.Type": {
          type: "object",
          properties: {
            prefix: {
              oneOf: [
                {
                  const: "prefix_A",
                },
                {
                  const: "prefix_B",
                },
                {
                  const: "prefix_C",
                },
              ],
            },
            postfix: {
              oneOf: [
                {
                  const: "3_postfix",
                },
                {
                  const: "2_postfix",
                },
                {
                  const: "1_postfix",
                },
              ],
            },
            combined: {
              oneOf: [
                {
                  const: "the_3_value_with_label_A",
                },
                {
                  const: "the_3_value_with_label_B",
                },
                {
                  const: "the_3_value_with_label_C",
                },
                {
                  const: "the_2_value_with_label_A",
                },
                {
                  const: "the_2_value_with_label_B",
                },
                {
                  const: "the_2_value_with_label_C",
                },
                {
                  const: "the_1_value_with_label_A",
                },
                {
                  const: "the_1_value_with_label_B",
                },
                {
                  const: "the_1_value_with_label_C",
                },
              ],
            },
          },
          required: ["prefix", "postfix", "combined"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TemplateConstant",
      },
    ],
  });
