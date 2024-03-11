import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_ConstantEnumeration = _test_reflect_metadata(
  "ConstantEnumeration",
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
          name: "ConstantEnumeration",
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
        name: "ConstantEnumeration",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [
            {
              type: "number",
              values: [0, 1, 2],
            },
            {
              type: "string",
              values: ["Four", "Three"],
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
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
