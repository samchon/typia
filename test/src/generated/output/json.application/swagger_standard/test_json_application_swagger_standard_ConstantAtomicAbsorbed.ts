import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../../structures/ConstantAtomicAbsorbed";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ConstantAtomicAbsorbed =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["id", "age"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
