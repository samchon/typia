import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../../structures/CommentTagObjectUnion";

export const test_json_application_ajv_CommentTagObjectUnion =
  _test_json_application("ajv")("CommentTagObjectUnion")({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagObjectUnion",
      },
    ],
    components: {
      schemas: {
        CommentTagObjectUnion: {
          $id: "#/components/schemas/CommentTagObjectUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagObjectUnion.Type",
          },
        },
        "CommentTagObjectUnion.Type": {
          $id: "#/components/schemas/CommentTagObjectUnion.Type",
          oneOf: [
            {
              $ref: "#/components/schemas/CommentTagObjectUnion.Numeric",
            },
            {
              $ref: "#/components/schemas/CommentTagObjectUnion.Literal",
            },
          ],
        },
        "CommentTagObjectUnion.Numeric": {
          $id: "#/components/schemas/CommentTagObjectUnion.Numeric",
          type: "object",
          properties: {
            value: {
              "x-typia-jsDocTags": [
                {
                  name: "minimum",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
              ],
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
        "CommentTagObjectUnion.Literal": {
          $id: "#/components/schemas/CommentTagObjectUnion.Literal",
          type: "object",
          properties: {
            value: {
              "x-typia-jsDocTags": [
                {
                  name: "minLength",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maxLength",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
              ],
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
