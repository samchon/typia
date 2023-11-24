import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_reflect_metadata_ArrayRepeatedOptional =
  _test_reflect_metadata("ArrayRepeatedOptional")(
    (typia.reflect.metadata as any).from({
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
    }),
  );
