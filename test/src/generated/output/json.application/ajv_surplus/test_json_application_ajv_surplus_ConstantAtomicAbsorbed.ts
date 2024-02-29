import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicAbsorbed } from "../../../../structures/ConstantAtomicAbsorbed";

export const test_json_application_ajv_surplus_ConstantAtomicAbsorbed =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicAbsorbed",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicAbsorbed",
      },
    ],
    components: {
      schemas: {
        ConstantAtomicAbsorbed: {
          $id: "#/components/schemas/ConstantAtomicAbsorbed",
          type: "object",
          properties: {
            id: {
              type: "string",
              default: "something",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Default<"something">',
                  kind: "default",
                  value: "something",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            age: {
              type: "number",
              default: 20,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: "Default<20>",
                  kind: "default",
                  value: 20,
                  exclusive: true,
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
