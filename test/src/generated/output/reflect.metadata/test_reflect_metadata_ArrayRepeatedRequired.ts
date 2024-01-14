import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_reflect_metadata_ArrayRepeatedRequired =
  _test_reflect_metadata("ArrayRepeatedRequired")({
    metadatas: [
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
          {
            type: "number",
            tags: [],
          },
        ],
        constants: [],
        templates: [],
        escaped: null,
        rest: null,
        arrays: [
          {
            name: "Array<ArrayRepeatedRequired>",
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
    ],
    components: {
      objects: [],
      aliases: [],
      arrays: [
        {
          name: "Array<ArrayRepeatedRequired>",
          value: {
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
              {
                type: "number",
                tags: [],
              },
            ],
            constants: [],
            templates: [],
            escaped: null,
            rest: null,
            arrays: [
              {
                name: "Array<ArrayRepeatedRequired>",
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
          nullables: [false],
          recursive: true,
          index: 0,
        },
      ],
      tuples: [],
    },
  });
