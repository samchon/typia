import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../../structures/TypeTagObjectUnion";

export const test_json_application_ajv_TypeTagObjectUnion =
  _test_json_application("ajv")("TypeTagObjectUnion")({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagObjectUnion",
      },
    ],
    components: {
      schemas: {
        TypeTagObjectUnion: {
          $id: "#/components/schemas/TypeTagObjectUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/TypeTagObjectUnion.Type",
          },
        },
        "TypeTagObjectUnion.Type": {
          $id: "#/components/schemas/TypeTagObjectUnion.Type",
          oneOf: [
            {
              $ref: "#/components/schemas/TypeTagObjectUnion.Numeric",
            },
            {
              $ref: "#/components/schemas/TypeTagObjectUnion.Literal",
            },
          ],
        },
        "TypeTagObjectUnion.Numeric": {
          $id: "#/components/schemas/TypeTagObjectUnion.Numeric",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagObjectUnion.Literal": {
          $id: "#/components/schemas/TypeTagObjectUnion.Literal",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
