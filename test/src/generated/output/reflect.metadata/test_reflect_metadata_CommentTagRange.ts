import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_CommentTagRange = _test_reflect_metadata(
  "CommentTagRange",
)({
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
      objects: ["CommentTagRange"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "CommentTagRange",
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
                  name: "Array<CommentTagRange.Type>",
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
        recursive: false,
        nullables: [false],
      },
      {
        name: "CommentTagRange.Type",
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
                  values: ["greater"],
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
                  type: "number",
                  tags: [
                    [
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
              {
                name: "exclusiveMinimum",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["greater_equal"],
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
                  type: "number",
                  tags: [
                    [
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
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
          },
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
                  values: ["less"],
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
                  type: "number",
                  tags: [
                    [
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
                        exclusive: ["maximum", "exclusiveMaximum"],
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
              {
                name: "exclusiveMaximum",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["less_equal"],
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
                  type: "number",
                  tags: [
                    [
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maximum",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["greater_less"],
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
                  type: "number",
                  tags: [
                    [
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
                        exclusive: ["minimum", "exclusiveMinimum"],
                      },
                      {
                        target: "number",
                        name: "ExclusiveMaximum<7>",
                        kind: "exclusiveMaximum",
                        value: 7,
                        validate: "$input < 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
              {
                name: "exclusiveMinimum",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
              {
                name: "exclusiveMaximum",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["greater_equal_less"],
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
                  type: "number",
                  tags: [
                    [
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
                        exclusive: ["maximum", "exclusiveMaximum"],
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
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
                name: "exclusiveMaximum",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["greater_less_equal"],
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
                  type: "number",
                  tags: [
                    [
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
              {
                name: "exclusiveMinimum",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maximum",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["greater_equal_less_equal"],
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
                  type: "number",
                  tags: [
                    [
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
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
                name: "maximum",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
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
                  values: ["equal"],
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
                  type: "number",
                  tags: [
                    [
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
                name: "type",
                text: [
                  {
                    text: "int",
                    kind: "text",
                  },
                ],
              },
              {
                name: "minimum",
                text: [
                  {
                    text: "10",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maximum",
                text: [
                  {
                    text: "10",
                    kind: "text",
                  },
                ],
              },
            ],
          },
        ],
        jsDocTags: [],
        index: 1,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [
      {
        name: "Array<CommentTagRange.Type>",
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
          objects: ["CommentTagRange.Type"],
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
});
