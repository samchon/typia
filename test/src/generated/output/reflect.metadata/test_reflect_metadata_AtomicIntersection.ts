import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_reflect_metadata_AtomicIntersection = _test_reflect_metadata(
  "AtomicIntersection",
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
      tuples: [
        {
          name: "AtomicIntersection",
          tags: [],
        },
      ],
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
    arrays: [],
    tuples: [
      {
        name: "AtomicIntersection",
        index: null,
        elements: [
          {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
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
        recursive: false,
        nullables: [false],
      },
    ],
  },
});
