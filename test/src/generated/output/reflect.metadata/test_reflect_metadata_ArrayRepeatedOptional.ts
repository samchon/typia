import typia from "typia";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_ArrayRepeatedOptional =
  _test_reflect_metadata("ArrayRepeatedOptional")({
    metadatas: [
      {
        any: false,
        required: false,
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
            name: "Array<ArrayRepeatedOptional>",
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
          name: "Array<ArrayRepeatedOptional>",
          value: {
            any: false,
            required: false,
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
                name: "Array<ArrayRepeatedOptional>",
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
