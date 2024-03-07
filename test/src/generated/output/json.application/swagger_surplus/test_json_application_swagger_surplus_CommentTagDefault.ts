import typia from "typia";
import { CommentTagDefault } from "../../../../structures/CommentTagDefault";
import { _test_json_application } from "../../../../internal/_test_json_application";
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
              title: "Default tag on `boolean` typed value",
              description: "Default tag on `boolean` typed value.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
            },
            number: {
              type: "number",
              default: 1,
              title: "Default tag on `number` typed value",
              description: "Default tag on `number` typed value.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
            },
            string: {
              type: "string",
              default: "two",
              title: "Default tag on `string` typed value",
              description: "Default tag on `string` typed value.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
            },
            text: {
              type: "string",
              default: "Very long text, can you understand it?",
              title: "Default tag on `string` typed value with long characters",
              description:
                "Default tag on `string` typed value with long characters.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
              "x-typia-required": true,
              "x-typia-optional": false,
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
