import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagDefault } from "../../../../structures/CommentTagDefault";

export const test_json_application_ajv_standard_CommentTagDefault =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagDefault",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagDefault",
      },
    ],
    components: {
      schemas: {
        CommentTagDefault: {
          $id: "#/components/schemas/CommentTagDefault",
          type: "object",
          properties: {
            boolean: {
              default: true,
              type: "boolean",
              description: "Default tag on `boolean` typed value.",
            },
            number: {
              type: "number",
              default: 1,
              description: "Default tag on `number` typed value.",
            },
            string: {
              type: "string",
              default: "two",
              description: "Default tag on `string` typed value.",
            },
            text: {
              type: "string",
              default: "Very long text, can you understand it?",
              description:
                "Default tag on `string` typed value with long characters.",
            },
            boolean_and_number_and_string: {
              oneOf: [
                {
                  type: "string",
                  default: "two",
                },
                {
                  type: "number",
                  default: 1,
                },
                {
                  default: true,
                  type: "boolean",
                },
              ],
              description: "Default value on union typed property.",
            },
            union_but_boolean: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  default: true,
                  type: "boolean",
                },
              ],
              description: "Default value on union typed property.",
            },
            union_but_number: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                  default: 1,
                },
                {
                  type: "boolean",
                },
              ],
              description: "Default value on union typed property.",
            },
            union_but_string: {
              oneOf: [
                {
                  type: "string",
                  default: "two",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              description: "Default value on union typed property.",
            },
            vulnerable_range: {
              type: "number",
              maximum: 5,
              minimum: 3,
              description: "Default value on union typed property.",
            },
            boolean_and_number_and_template: {
              oneOf: [
                {
                  type: "string",
                  pattern:
                    "^([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|true|false|(prefix_(.*)))",
                },
                {
                  type: "number",
                  default: 1,
                },
                {
                  default: true,
                  type: "boolean",
                },
              ],
              description: "Default value on union typed property.",
            },
          },
          required: [
            "boolean",
            "number",
            "string",
            "text",
            "boolean_and_number_and_string",
            "union_but_boolean",
            "union_but_number",
            "union_but_string",
            "vulnerable_range",
            "boolean_and_number_and_template",
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
