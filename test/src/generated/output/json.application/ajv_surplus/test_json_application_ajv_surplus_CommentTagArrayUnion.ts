import typia from "typia";
import { CommentTagArrayUnion } from "../../../../structures/CommentTagArrayUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_CommentTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagArrayUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArrayUnion",
      },
    ],
    components: {
      schemas: {
        CommentTagArrayUnion: {
          $id: "#/components/schemas/CommentTagArrayUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagArrayUnion.Type",
          },
        },
        "CommentTagArrayUnion.Type": {
          $id: "#/components/schemas/CommentTagArrayUnion.Type",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "string",
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
              "x-typia-jsDocTags": [
                {
                  name: "items",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            minItems: {
              type: "array",
              items: {
                type: "number",
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
              "x-typia-jsDocTags": [
                {
                  name: "minItems",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            maxItems: {
              type: "array",
              items: {
                oneOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "number",
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
              "x-typia-jsDocTags": [
                {
                  name: "maxItems",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            both: {
              type: "array",
              items: {
                type: "string",
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
              "x-typia-jsDocTags": [
                {
                  name: "minItems",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maxItems",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
          },
          required: ["items", "minItems", "maxItems", "both"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
