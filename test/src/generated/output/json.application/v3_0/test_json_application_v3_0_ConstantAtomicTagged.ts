import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicTagged } from "../../../../structures/ConstantAtomicTagged";

export const test_json_application_v3_0_ConstantAtomicTagged =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicTagged",
  })({
    version: "3.0",
    components: {
      schemas: {
        ConstantAtomicTagged: {
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
          nullable: false,
          required: ["id", "age"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicTagged",
      },
    ],
  });
