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
              type: "boolean",
            },
            number: {
              type: "number",
            },
            string: {
              type: "string",
            },
            text: {
              type: "string",
            },
            boolean_and_number_and_string: {
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
            union_but_boolean: {
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
            union_but_number: {
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
            union_but_string: {
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
            vulnerable_range: {
              type: "number",
              maximum: 5,
              minimum: 3,
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
                },
                {
                  type: "boolean",
                },
              ],
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
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
