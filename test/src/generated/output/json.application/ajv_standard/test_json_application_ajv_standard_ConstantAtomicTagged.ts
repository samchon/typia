import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicTagged } from "../../../../structures/ConstantAtomicTagged";

export const test_json_application_ajv_standard_ConstantAtomicTagged =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
                },
              ],
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
                },
              ],
            },
          },
          required: ["id", "age"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
