import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateAtomic } from "../../../../structures/TemplateAtomic";

export const test_json_application_swagger_TemplateAtomic =
  _test_json_application("swagger")("TemplateAtomic")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern: "^(prefix_(.*))",
            },
            postfix: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern: "((.*)_postfix)$",
            },
            middle_string: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern: "^(the_(.*)_value)$",
            },
            middle_string_empty: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern: "^(the_(.*)_value)$",
            },
            middle_numeric: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern: "^(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value)$",
            },
            middle_boolean: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["the_false_value", "the_true_value"],
            },
            ipv4: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern:
                "^([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$",
            },
            email: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
              pattern: "((.*)@(.*)\\.(.*))",
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
  });
