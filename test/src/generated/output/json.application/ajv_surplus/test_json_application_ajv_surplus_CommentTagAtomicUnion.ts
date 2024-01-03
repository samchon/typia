import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagAtomicUnion } from "../../../../structures/CommentTagAtomicUnion";

export const test_json_application_ajv_surplus_CommentTagAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagAtomicUnion",
      },
    ],
    components: {
      schemas: {
        CommentTagAtomicUnion: {
          $id: "#/components/schemas/CommentTagAtomicUnion",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagAtomicUnion.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "CommentTagAtomicUnion.Type": {
          $id: "#/components/schemas/CommentTagAtomicUnion.Type",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
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
              ],
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
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
