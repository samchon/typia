import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicTagged } from "../../../../structures/ConstantAtomicTagged";

export const test_json_application_v3_1_ConstantAtomicTagged =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicTagged",
  })({
    version: "3.1",
    components: {
      schemas: {
        ConstantAtomicTagged: {
          type: "object",
          properties: {
            id: {
              oneOf: [
                {
                  const: "latest",
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
                  const: -1,
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
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicTagged",
      },
    ],
  });
