import typia from "typia";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/TypeTagAtomicUnion",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagAtomicUnion.Type",
              },
            },
          },
          required: ["value"],
        },
        "TypeTagAtomicUnion.Type": {
          $id: "#/components/schemas/TypeTagAtomicUnion.Type",
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
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
