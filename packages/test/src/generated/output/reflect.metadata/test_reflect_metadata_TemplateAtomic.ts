import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_reflect_metadata_TemplateAtomic = _test_reflect_metadata(
  "TemplateAtomic",
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
        objects: ["TemplateAtomic"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "TemplateAtomic",
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
                    values: ["prefix"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["prefix_"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                  ],
                ],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["postfix"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["_postfix"],
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
                  ],
                ],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["middle_string"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["the_"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["_value"],
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
                  ],
                ],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["middle_string_empty"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["the_"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["_value"],
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
                  ],
                ],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["middle_numeric"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["the_"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "number",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["_value"],
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
                  ],
                ],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["middle_boolean"],
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
                constants: [
                  {
                    type: "string",
                    values: ["the_false_value", "the_true_value"],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["ipv4"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "number",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["."],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "number",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["."],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "number",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["."],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "number",
                          tags: [],
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
                  ],
                ],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["email"],
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
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["@"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["."],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [
                        {
                          type: "string",
                          tags: [],
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
                  ],
                ],
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
