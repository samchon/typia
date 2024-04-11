import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";

export const test_json_application_v3_0_ConstantAtomicSimple =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicSimple",
  })({
    version: "3.0",
    components: {
      schemas: {
        ConstantAtomicSimple: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
                enum: [false, true],
              },
              {
                type: "number",
                enum: [2],
              },
              {
                type: "string",
                enum: ["three"],
              },
            ],
          },
          minItems: 4,
          maxItems: 4,
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicSimple",
      },
    ],
  });
