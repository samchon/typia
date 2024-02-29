import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicTagged } from "../../../../structures/ConstantAtomicTagged";

export const test_json_application_ajv_surplus_ConstantAtomicTagged =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicTagged",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicTagged",
      },
    ],
    components: {
      schemas: {
        ConstantAtomicTagged: {
          $id: "#/components/schemas/ConstantAtomicTagged",
          type: "object",
          properties: {
            id: {
              oneOf: [
                {
                  type: "string",
                  enum: ["latest"],
                },
                {
                  type: "string",
                  format: "uuid",
                  "x-typia-typeTags": [
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
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            age: {
              oneOf: [
                {
                  type: "number",
                  enum: [-1],
                },
                {
                  type: "integer",
                  maximum: 100,
                  "x-typia-typeTags": [
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
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "age"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
