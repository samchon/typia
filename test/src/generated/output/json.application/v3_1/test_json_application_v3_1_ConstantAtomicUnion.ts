import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../../structures/ConstantAtomicUnion";

export const test_json_application_v3_1_ConstantAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicUnion",
  })({
    version: "3.1",
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
              const: false,
            },
            {
              const: 2,
            },
            {
              const: 1,
            },
            {
              const: "three",
            },
            {
              const: "four",
            },
            {
              type: "object",
              properties: {
                key: {
                  const: "key",
                },
              },
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
