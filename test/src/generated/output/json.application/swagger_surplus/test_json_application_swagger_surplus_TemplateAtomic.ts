import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateAtomic } from "../../../../structures/TemplateAtomic";

export const test_json_application_swagger_surplus_TemplateAtomic =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TemplateAtomic",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TemplateAtomic",
      },
    ],
    components: {
      schemas: {
        TemplateAtomic: {
          type: "object",
          properties: {
            prefix: {
              type: "string",
              pattern: "^(prefix_(.*))",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            postfix: {
              type: "string",
              pattern: "((.*)_postfix)$",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            middle_string: {
              type: "string",
              pattern: "^(the_(.*)_value)$",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            middle_string_empty: {
              type: "string",
              pattern: "^(the_(.*)_value)$",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            middle_numeric: {
              type: "string",
              pattern: "^(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value)$",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            middle_boolean: {
              type: "string",
              enum: ["the_false_value", "the_true_value"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            ipv4: {
              type: "string",
              pattern:
                "^([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            email: {
              type: "string",
              pattern: "((.*)@(.*)\\.(.*))",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: [
            "prefix",
            "postfix",
            "middle_string",
            "middle_string_empty",
            "middle_numeric",
            "middle_boolean",
            "ipv4",
            "email",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
