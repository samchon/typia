import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_reflect_metadata_DynamicTag = _test_reflect_metadata(
  "DynamicTag",
)(
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
        objects: ["DynamicTag"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "DynamicTag",
          properties: [
            {
              key: {
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
                          name: "Minimum<0>",
                          kind: "minimum",
                          value: 0,
                          validate: "0 <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
                        },
                        {
                          target: "number",
                          name: "ExclusiveMaximum<10>",
                          kind: "exclusiveMaximum",
                          value: 10,
                          validate: "$input < 10",
                          exclusive: ["exclusiveMaximum", "maximum"],
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
              value: {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: 'Type<"uint64">',
                          kind: "type",
                          value: "uint64",
                          validate: "BigInt(0) <= $input",
                          exclusive: true,
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
              jsDocTags: [],
            },
            {
              key: {
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
                            "/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)",
                          exclusive: ["format", "pattern"],
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
                          name: 'Format<"email">',
                          kind: "format",
                          value: "email",
                          validate:
                            '/^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i.test($input)',
                          exclusive: ["format", "pattern"],
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
              jsDocTags: [],
            },
          ],
          jsDocTags: [],
          index: 0,
          validated: false,
          recursive: false,
          nullables: [false],
        },
      ],
      aliases: [],
      arrays: [],
      tuples: [],
    },
  }),
);
