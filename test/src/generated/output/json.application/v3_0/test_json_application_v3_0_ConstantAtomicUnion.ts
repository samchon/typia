import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../../structures/ConstantAtomicUnion";

export const test_json_application_v3_0_ConstantAtomicUnion =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicUnion",
  })({
    version: "3.0",
    components: {
      schemas: {
        ConstantAtomicUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ConstantAtomicUnion.Union",
          },
        },
        "ConstantAtomicUnion.Union": {
          oneOf: [
            {
              type: "boolean",
              enum: [false],
            },
            {
              type: "number",
              enum: [2, 1],
            },
            {
              type: "string",
              enum: ["three", "four"],
            },
            {
              type: "object",
              properties: {
                key: {
                  type: "string",
                  enum: ["key"],
                },
              },
              nullable: false,
              required: ["key"],
            },
          ],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicUnion",
      },
    ],
  });
