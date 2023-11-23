import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_reflect_metadata_ConstantAtomicSimple =
  _test_reflect_metadata("ConstantAtomicSimple")(
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
          tuples: [
            {
              name: "ConstantAtomicSimple",
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
            name: "ConstantAtomicSimple",
            index: null,
            elements: [
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [
                  {
                    type: "boolean",
                    values: [false],
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
                atomics: [],
                constants: [
                  {
                    type: "boolean",
                    values: [true],
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
                atomics: [],
                constants: [
                  {
                    type: "number",
                    values: [2],
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
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["three"],
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
            recursive: false,
            nullables: [false],
          },
        ],
      },
    }),
  );
