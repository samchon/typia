import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_reflect_metadata_ArrayRepeatedUnionWithTuple =
  _test_reflect_metadata("ArrayRepeatedUnionWithTuple")(
    (typia.reflect.metadata as any).from({
      metadatas: [
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
            {
              type: "boolean",
              tags: [],
            },
          ],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [
            {
              name: "Array<string>",
              tags: [],
            },
            {
              name: "Array<ArrayRepeatedUnionWithTuple>",
              tags: [],
            },
            {
              name: "Array<ArrayRepeatedUnionWithTuple.IBox3D>",
              tags: [],
            },
          ],
          tuples: [
            {
              name: "[string, number, boolean]",
              tags: [],
            },
            {
              name: "[IBox3D, IPoint3D]",
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
        objects: [
          {
            name: "ArrayRepeatedUnionWithTuple.IBox3D",
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
                      values: ["scale"],
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
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: ["ArrayRepeatedUnionWithTuple.IPoint3D"],
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
                      values: ["position"],
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
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: ["ArrayRepeatedUnionWithTuple.IPoint3D"],
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
                      values: ["rotate"],
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
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: ["ArrayRepeatedUnionWithTuple.IPoint3D"],
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
                      values: ["pivot"],
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
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: ["ArrayRepeatedUnionWithTuple.IPoint3D"],
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
          {
            name: "ArrayRepeatedUnionWithTuple.IPoint3D",
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
                      values: ["x"],
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
                      values: ["y"],
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
                      values: ["z"],
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
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 1,
            validated: false,
            recursive: false,
            nullables: [false],
          },
        ],
        aliases: [],
        arrays: [
          {
            name: "Array<string>",
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
          {
            name: "Array<ArrayRepeatedUnionWithTuple>",
            value: {
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
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<string>",
                  tags: [],
                },
                {
                  name: "Array<ArrayRepeatedUnionWithTuple>",
                  tags: [],
                },
                {
                  name: "Array<ArrayRepeatedUnionWithTuple.IBox3D>",
                  tags: [],
                },
              ],
              tuples: [
                {
                  name: "[string, number, boolean]",
                  tags: [],
                },
                {
                  name: "[IBox3D, IPoint3D]",
                  tags: [],
                },
              ],
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
          {
            name: "Array<ArrayRepeatedUnionWithTuple.IBox3D>",
            value: {
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
              objects: ["ArrayRepeatedUnionWithTuple.IBox3D"],
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
        tuples: [
          {
            name: "[string, number, boolean]",
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
            ],
            recursive: false,
            nullables: [false],
          },
          {
            name: "[IBox3D, IPoint3D]",
            index: null,
            elements: [
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
                objects: ["ArrayRepeatedUnionWithTuple.IBox3D"],
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
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: ["ArrayRepeatedUnionWithTuple.IPoint3D"],
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
