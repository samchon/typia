import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_TypeTagMatrix = _test_reflect_metadata(
  "TypeTagMatrix",
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
      objects: ["TypeTagMatrix"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "TypeTagMatrix",
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
                  values: ["matrix"],
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
                  name: 'Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>>',
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MinItems<3>",
                        kind: "minItems",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 3,
                        },
                      },
                      {
                        target: "array",
                        name: "MaxItems<3>",
                        kind: "maxItems",
                        value: 3,
                        validate: "$input.length <= 3",
                        exclusive: true,
                        schema: {
                          maxItems: 3,
                        },
                      },
                    ],
                  ],
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
    ],
    aliases: [],
    arrays: [
      {
        name: 'Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>>',
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
              name: 'Array<string & Format<"uuid">>',
              tags: [
                [
                  {
                    target: "array",
                    name: "MinItems<4>",
                    kind: "minItems",
                    value: 4,
                    validate: "4 <= $input.length",
                    exclusive: true,
                    schema: {
                      minItems: 4,
                    },
                  },
                  {
                    target: "array",
                    name: "MaxItems<4>",
                    kind: "maxItems",
                    value: 4,
                    validate: "$input.length <= 4",
                    exclusive: true,
                    schema: {
                      maxItems: 4,
                    },
                  },
                ],
              ],
            },
          ],
          tuples: [],
          objects: [],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [false],
        recursive: false,
        index: null,
      },
      {
        name: 'Array<string & Format<"uuid">>',
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
                    name: 'Format<"uuid">',
                    kind: "format",
                    value: "uuid",
                    validate:
                      "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                    exclusive: ["format", "pattern"],
                    schema: {
                      format: "uuid",
                    },
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
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
