import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../../structures/CommentTagArrayUnion";

export const test_json_application_swagger_CommentTagArrayUnion =
  _test_json_application("swagger")("CommentTagArrayUnion")({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArrayUnion",
      },
    ],
    components: {
      schemas: {
        CommentTagArrayUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagArrayUnion.Type",
          },
        },
        "CommentTagArrayUnion.Type": {
          type: "object",
          properties: {
            items: {
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
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
                "x-typia-required": true,
                "x-typia-optional": false,
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
            },
            minItems: {
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
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
                "x-typia-required": true,
                "x-typia-optional": false,
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
            },
            maxItems: {
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                oneOf: [
                  {
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
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "string",
                  },
                  {
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
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "number",
                  },
                ],
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
                "x-typia-required": true,
                "x-typia-optional": false,
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
            },
            both: {
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
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
                "x-typia-required": true,
                "x-typia-optional": false,
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
            },
          },
          nullable: false,
          required: ["items", "minItems", "maxItems", "both"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
