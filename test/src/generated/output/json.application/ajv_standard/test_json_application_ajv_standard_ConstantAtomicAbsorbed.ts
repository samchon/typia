import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicAbsorbed } from "../../../../structures/ConstantAtomicAbsorbed";

export const test_json_application_ajv_standard_ConstantAtomicAbsorbed =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            age: {
              type: "number",
              default: 20,
            },
          },
          required: ["id", "age"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
