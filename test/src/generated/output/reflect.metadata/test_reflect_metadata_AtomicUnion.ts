import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_AtomicUnion = _test_reflect_metadata(
  "AtomicUnion",
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
      arrays: [
        {
          name: "AtomicUnion",
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
        name: "AtomicUnion",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: true,
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
            {
              type: "boolean",
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
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
