import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagRange } from "../../../../structures/TypeTagRange";

export const test_json_application_ajv_surplus_TypeTagRange =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagRange",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagRange",
      },
    ],
    components: {
      schemas: {
        TypeTagRange: {
          $id: "#/components/schemas/TypeTagRange",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagRange.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagRange.Type": {
          $id: "#/components/schemas/TypeTagRange.Type",
          type: "object",
          properties: {
            greater: {
              type: "integer",
              minimum: 3,
              exclusiveMinimum: true,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMinimum<3>",
                  kind: "exclusiveMinimum",
                  value: 3,
                  validate: "3 < $input",
                  exclusive: ["exclusiveMinimum", "minimum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            greater_equal: {
              type: "integer",
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Minimum<3>",
                  kind: "minimum",
                  value: 3,
                  validate: "3 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            less: {
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMaximum<7>",
                  kind: "exclusiveMaximum",
                  value: 7,
                  validate: "$input < 7",
                  exclusive: ["exclusiveMaximum", "maximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            less_equal: {
              type: "integer",
              maximum: 7,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                  validate: "$input <= 7",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            greater_less: {
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              minimum: 3,
              exclusiveMinimum: true,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMinimum<3>",
                  kind: "exclusiveMinimum",
                  value: 3,
                  validate: "3 < $input",
                  exclusive: ["exclusiveMinimum", "minimum"],
                },
                {
                  target: "number",
                  name: "ExclusiveMaximum<7>",
                  kind: "exclusiveMaximum",
                  value: 7,
                  validate: "$input < 7",
                  exclusive: ["exclusiveMaximum", "maximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            greater_equal_less: {
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
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
                  name: "ExclusiveMaximum<7>",
                  kind: "exclusiveMaximum",
                  value: 7,
                  validate: "$input < 7",
                  exclusive: ["exclusiveMaximum", "maximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            greater_less_equal: {
              type: "integer",
              minimum: 3,
              exclusiveMinimum: true,
              maximum: 7,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMinimum<3>",
                  kind: "exclusiveMinimum",
                  value: 3,
                  validate: "3 < $input",
                  exclusive: ["exclusiveMinimum", "minimum"],
                },
                {
                  target: "number",
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                  validate: "$input <= 7",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            greater_equal_less_equal: {
              type: "integer",
              maximum: 7,
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
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
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                  validate: "$input <= 7",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            equal: {
              type: "integer",
              maximum: 10,
              minimum: 10,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Minimum<10>",
                  kind: "minimum",
                  value: 10,
                  validate: "10 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
                {
                  target: "number",
                  name: "Maximum<10>",
                  kind: "maximum",
                  value: 10,
                  validate: "$input <= 10",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: [
            "greater",
            "greater_equal",
            "less",
            "less_equal",
            "greater_less",
            "greater_equal_less",
            "greater_less_equal",
            "greater_equal_less_equal",
            "equal",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
