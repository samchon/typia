import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_reflect_metadata_ConstantAtomicTagged =
  _test_reflect_metadata("ConstantAtomicTagged")({
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
        objects: ["ConstantAtomicTagged"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "ConstantAtomicTagged",
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
                    values: ["id"],
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
                    type: "string",
                    tags: [
                      [
                        {
                          target: "string",
                          name: 'Format<"uuid">',
                          kind: "format",
                          value: "uuid",
                          validate:
                            "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                          exclusive: ["format", "pattern"],
                        },
                      ],
                    ],
                  },
                ],
                constants: [
                  {
                    type: "string",
                    values: ["latest"],
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
                    values: ["age"],
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
                    tags: [
                      [
                        {
                          target: "number",
                          name: 'Type<"uint32">',
                          kind: "type",
                          value: "uint32",
                          validate:
                            "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                          exclusive: true,
                        },
                        {
                          target: "number",
                          name: "Maximum<100>",
                          kind: "maximum",
                          value: 100,
                          validate: "$input <= 100",
                          exclusive: ["maximum", "exclusiveMaximum"],
                        },
                      ],
                    ],
                  },
                ],
                constants: [
                  {
                    type: "number",
                    values: [-1],
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
          ],
          jsDocTags: [],
          index: 0,
          recursive: false,
          nullables: [false],
        },
      ],
      aliases: [],
      arrays: [],
      tuples: [],
    },
  });
