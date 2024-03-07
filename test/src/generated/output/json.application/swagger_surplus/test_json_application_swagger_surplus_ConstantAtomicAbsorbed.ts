import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../../structures/ConstantAtomicAbsorbed";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ConstantAtomicAbsorbed =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["id", "age"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
