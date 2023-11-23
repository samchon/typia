import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../../structures/TypeTagTuple";

export const test_json_application_ajv_TypeTagTuple = _test_json_application(
  "ajv",
)("TypeTagTuple")({
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagTuple",
    },
  ],
  components: {
    schemas: {
      TypeTagTuple: {
        $id: "#/components/schemas/TypeTagTuple",
        type: "object",
        properties: {
          tuple: {
            type: "array",
            items: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                "x-typia-rest": false,
                type: "string",
                maxLength: 7,
                minLength: 3,
                "x-typia-typeTags": [
                  {
                    target: "string",
                    name: "MinLength<3>",
                    kind: "minLength",
                    value: 3,
                    validate: "3 <= $input.length",
                    exclusive: true,
                  },
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
                "x-typia-required": true,
                "x-typia-optional": false,
                "x-typia-rest": false,
                type: "number",
                maximum: 7,
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
                    name: "Maximum<7>",
                    kind: "maximum",
                    value: 7,
                    validate: "$input <= 7",
                    exclusive: ["maximum", "exclusiveMaximum"],
                  },
                ],
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                "x-typia-rest": false,
                type: "array",
                items: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  "x-typia-rest": false,
                  type: "string",
                  maxLength: 2,
                  minLength: 1,
                  "x-typia-typeTags": [
                    {
                      target: "string",
                      name: "MinLength<1>",
                      kind: "minLength",
                      value: 1,
                      validate: "1 <= $input.length",
                      exclusive: true,
                    },
                    {
                      target: "string",
                      name: "MaxLength<2>",
                      kind: "maxLength",
                      value: 2,
                      validate: "$input.length <= 2",
                      exclusive: true,
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
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                "x-typia-rest": false,
                type: "array",
                items: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  "x-typia-rest": false,
                  type: "number",
                  maximum: 2,
                  minimum: 1,
                  "x-typia-typeTags": [
                    {
                      target: "number",
                      name: "Minimum<1>",
                      kind: "minimum",
                      value: 1,
                      validate: "1 <= $input",
                      exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                      target: "number",
                      name: "Maximum<2>",
                      kind: "maximum",
                      value: 2,
                      validate: "$input <= 2",
                      exclusive: ["maximum", "exclusiveMaximum"],
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
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            minItems: 4,
            maxItems: 4,
          },
        },
        required: ["tuple"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
