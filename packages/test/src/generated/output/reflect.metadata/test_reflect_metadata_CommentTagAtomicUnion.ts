import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_reflect_metadata_CommentTagAtomicUnion =
  _test_reflect_metadata("CommentTagAtomicUnion")(
    (typia.reflect.metadata as any).from({
      metadatas: [
        {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [],
          objects: ["CommentTagAtomicUnion"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
      ],
      components: {
        objects: [
          {
            name: "CommentTagAtomicUnion",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["value"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [
                    {
                      name: "Array<CommentTagAtomicUnion.Type>",
                      tags: [],
                    },
                  ],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 0,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "CommentTagAtomicUnion.Type",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["value"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "string",
                      tags: [
                        [
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
                      ],
                    },
                    {
                      type: "number",
                      tags: [
                        [
                          {
                            target: "number",
                            name: "Minimum<3>",
                            kind: "minimum",
                            value: 3,
                            validate: "3 <= $input",
                            exclusive: ["minimum", "exclusiveMinimum"],
                          },
                        ],
                      ],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [
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
              },
            ],
            jsDocTags: [],
            index: 1,
            validated: false,
            recursive: false,
            nullables: [false],
          },
        ],
        aliases: [],
        arrays: [
          {
            name: "Array<CommentTagAtomicUnion.Type>",
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: ["CommentTagAtomicUnion.Type"],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            nullables: [false],
            recursive: false,
            index: null,
          },
        ],
        tuples: [],
      },
    }),
  );
