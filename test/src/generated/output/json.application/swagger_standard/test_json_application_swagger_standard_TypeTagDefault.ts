import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../../structures/TypeTagDefault";

export const test_json_application_swagger_standard_TypeTagDefault =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagDefault",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagDefault",
      },
    ],
    components: {
      schemas: {
        TypeTagDefault: {
          type: "object",
          properties: {
            boolean: {
              default: false,
              type: "boolean",
            },
            number: {
              type: "number",
              default: 1,
            },
            string: {
              type: "string",
              default: "two",
            },
            text: {
              type: "string",
              default: "Very long text, can you understand it?",
            },
            boolean_and_number_and_string: {
              oneOf: [
                {
                  type: "number",
                  default: 1,
                },
                {
                  type: "string",
                  default: "two",
                },
                {
                  default: false,
                  type: "boolean",
                },
              ],
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
                  default: false,
                  type: "boolean",
                },
              ],
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
            },
            union_but_string: {
              oneOf: [
                {
                  type: "number",
                },
                {
                  type: "string",
                  default: "two",
                },
                {
                  type: "boolean",
                },
              ],
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
                  default: 2,
                },
                {
                  default: false,
                  type: "boolean",
                },
              ],
            },
          },
          nullable: false,
          required: [
            "boolean",
            "number",
            "string",
            "text",
            "boolean_and_number_and_string",
            "union_but_boolean",
            "union_but_number",
            "union_but_string",
            "boolean_and_number_and_template",
          ],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
