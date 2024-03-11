import typia from "typia";
import { TemplateConstant } from "../../../../structures/TemplateConstant";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_TemplateConstant =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
          $id: "#/components/schemas/TemplateConstant",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TemplateConstant.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TemplateConstant.Type": {
          $id: "#/components/schemas/TemplateConstant.Type",
          type: "object",
          properties: {
            prefix: {
              type: "string",
              enum: ["prefix_A", "prefix_B", "prefix_C"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            postfix: {
              type: "string",
              enum: ["1_postfix", "2_postfix", "3_postfix"],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["prefix", "postfix", "combined"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
