import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../../structures/TypeTagArrayUnion";

export const test_json_application_swagger_surplus_TypeTagArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagArrayUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagArrayUnion",
      },
    ],
    components: {
      schemas: {
        TypeTagArrayUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/TypeTagArrayUnion.Type",
          },
        },
        "TypeTagArrayUnion.Type": {
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
            maxItems: {
              type: "array",
              items: {
                oneOf: [
                  {
                    type: "string",
                    maxLength: 7,
                    "x-typia-typeTags": [
                      {
                        target: "string",
                        name: "MaxLength<7>",
                        kind: "maxLength",
                        value: 7,
                        validate: "$input.length <= 7",
                        exclusive: true,
                      },
                    ],
                  },
                  {
                    type: "number",
                    maximum: 7,
                    "x-typia-typeTags": [
                      {
                        target: "number",
                        name: "Maximum<7>",
                        kind: "maximum",
                        value: 7,
                        validate: "$input <= 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                      },
                    ],
                  },
                ],
              },
              maxItems: 7,
              "x-typia-typeTags": [
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
          },
          nullable: false,
          required: ["items", "minItems", "maxItems", "both"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
