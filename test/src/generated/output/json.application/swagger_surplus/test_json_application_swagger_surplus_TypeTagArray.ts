import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArray } from "../../../../structures/TypeTagArray";

export const test_json_application_swagger_surplus_TypeTagArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagArray",
      },
    ],
    components: {
      schemas: {
        TypeTagArray: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagArray.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagArray.Type": {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "string",
                format: "uuid",
                "x-typia-typeTags": [
                  {
                    target: "string",
                    name: 'Format<"uuid">',
                    kind: "format",
                    value: "uuid",
                    validate:
                      "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                    exclusive: ["format", "pattern"],
                  },
                ],
              },
              maxItems: 3,
              minItems: 3,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<3>",
                  kind: "minItems",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "array",
                  name: "MaxItems<3>",
                  kind: "maxItems",
                  value: 3,
                  validate: "$input.length <= 3",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minItems: {
              type: "array",
              items: {
                type: "number",
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
                ],
              },
              minItems: 3,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<3>",
                  kind: "minItems",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            both: {
              type: "array",
              items: {
                type: "string",
                format: "uuid",
                "x-typia-typeTags": [
                  {
                    target: "string",
                    name: 'Format<"uuid">',
                    kind: "format",
                    value: "uuid",
                    validate:
                      "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                    exclusive: ["format", "pattern"],
                  },
                ],
              },
              maxItems: 7,
              minItems: 3,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<3>",
                  kind: "minItems",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "array",
                  name: "MaxItems<7>",
                  kind: "maxItems",
                  value: 7,
                  validate: "$input.length <= 7",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            equal: {
              type: "array",
              items: {
                type: "number",
                maximum: 10,
                minimum: 10,
                "x-typia-typeTags": [
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
              },
              maxItems: 10,
              minItems: 10,
              "x-typia-typeTags": [
                {
                  target: "array",
                  name: "MinItems<10>",
                  kind: "minItems",
                  value: 10,
                  validate: "10 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "array",
                  name: "MaxItems<10>",
                  kind: "maxItems",
                  value: 10,
                  validate: "$input.length <= 10",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["items", "minItems", "both", "equal"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
