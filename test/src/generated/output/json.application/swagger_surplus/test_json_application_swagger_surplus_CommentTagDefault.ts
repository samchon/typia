import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagDefault } from "../../../../structures/CommentTagDefault";

export const test_json_application_swagger_surplus_CommentTagDefault =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
          type: "object",
          properties: {
            boolean: {
              default: true,
              type: "boolean",
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "false",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            number: {
              type: "number",
              default: 1,
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "1",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            string: {
              type: "string",
              default: "two",
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "two",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            text: {
              type: "string",
              default: "Very long text, can you understand it?",
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "Very long text, can you understand it?",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "false",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "default",
                  text: [
                    {
                      text: "1",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "default",
                  text: [
                    {
                      text: "two",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "false",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "1",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "two",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            vulnerable_range: {
              type: "number",
              maximum: 5,
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: "Minimum<3>",
                  kind: "minimum",
                  value: 3,
                  validate: "3 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
                {
                  target: "number",
                  name: "Maximum<5>",
                  kind: "maximum",
                  value: 5,
                  validate: "$input <= 5",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "minimum",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maximum",
                  text: [
                    {
                      text: "5",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-jsDocTags": [
                {
                  name: "default",
                  text: [
                    {
                      text: "false",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "default",
                  text: [
                    {
                      text: "1",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
            "vulnerable_range",
            "boolean_and_number_and_template",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
