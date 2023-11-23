import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_reflect_metadata_DynamicNever = _test_reflect_metadata(
  "DynamicNever",
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
        objects: ["DynamicNever"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "DynamicNever",
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
              value: {
                any: false,
                required: false,
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
