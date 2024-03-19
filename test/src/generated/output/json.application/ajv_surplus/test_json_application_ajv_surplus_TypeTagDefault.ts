import typia from "typia";
import { TypeTagDefault } from "../../../../structures/TypeTagDefault";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_TypeTagDefault =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
          $id: "#/components/schemas/TypeTagDefault",
          type: "object",
          properties: {
            boolean: {
              default: false,
              type: "boolean",
              "x-typia-typeTags": [
                {
                  target: "boolean",
                  name: "Default<false>",
                  kind: "default",
                  value: false,
                  exclusive: true,
                  schema: {
                    default: false,
                  },
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            number: {
              type: "number",
              default: 1,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: "Default<1>",
                  kind: "default",
                  value: 1,
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            string: {
              type: "string",
              default: "two",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Default<"two">',
                  kind: "default",
                  value: "two",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            text: {
              type: "string",
              default: "Very long text, can you understand it?",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Default<"Very long text, can you understand it?">',
                  kind: "default",
                  value: "Very long text, can you understand it?",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            boolean_and_number_and_string: {
              oneOf: [
                {
                  type: "number",
                  default: 1,
                  "x-typia-typeTags": [
                    {
                      target: "number",
                      name: "Default<1>",
                      kind: "default",
                      value: 1,
                      exclusive: true,
                    },
                  ],
                },
                {
                  type: "string",
                  default: "two",
                  "x-typia-typeTags": [
                    {
                      target: "string",
                      name: 'Default<"two">',
                      kind: "default",
                      value: "two",
                      exclusive: true,
                    },
                  ],
                },
                {
                  default: false,
                  type: "boolean",
                  "x-typia-typeTags": [
                    {
                      target: "boolean",
                      name: "Default<false>",
                      kind: "default",
                      value: false,
                      exclusive: true,
                      schema: {
                        default: false,
                      },
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
                  default: false,
                  type: "boolean",
                  "x-typia-typeTags": [
                    {
                      target: "boolean",
                      name: "Default<false>",
                      kind: "default",
                      value: false,
                      exclusive: true,
                      schema: {
                        default: false,
                      },
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
                  "x-typia-typeTags": [
                    {
                      target: "number",
                      name: "Default<1>",
                      kind: "default",
                      value: 1,
                      exclusive: true,
                    },
                  ],
                },
                {
                  type: "boolean",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            union_but_string: {
              oneOf: [
                {
                  type: "number",
                },
                {
                  type: "string",
                  default: "two",
                  "x-typia-typeTags": [
                    {
                      target: "string",
                      name: 'Default<"two">',
                      kind: "default",
                      value: "two",
                      exclusive: true,
                    },
                  ],
                },
                {
                  type: "boolean",
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
                  default: 2,
                  "x-typia-typeTags": [
                    {
                      target: "number",
                      name: "Default<2>",
                      kind: "default",
                      value: 2,
                      exclusive: true,
                    },
                  ],
                },
                {
                  default: false,
                  type: "boolean",
                  "x-typia-typeTags": [
                    {
                      target: "boolean",
                      name: "Default<false>",
                      kind: "default",
                      value: false,
                      exclusive: true,
                      schema: {
                        default: false,
                      },
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
            "boolean_and_number_and_template",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
