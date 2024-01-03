import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";

export const test_json_application_swagger_standard_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagAtomicUnion",
      },
    ],
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
                  maxLength: 7,
                  minLength: 3,
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
    purpose: "swagger",
    surplus: false,
  });
