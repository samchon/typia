import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";

export const test_json_application_v3_0_TypeTagAtomicUnion =
  _test_json_application({
    version: "3.0",
    name: "TypeTagAtomicUnion",
  })({
    version: "3.0",
    components: {
      schemas: {
        TypeTagAtomicUnion: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagAtomicUnion.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "TypeTagAtomicUnion.Type": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "string",
                  minLength: 3,
                  maxLength: 7,
                },
                {
                  type: "number",
                  minimum: 3,
                },
              ],
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagAtomicUnion",
      },
    ],
  });
