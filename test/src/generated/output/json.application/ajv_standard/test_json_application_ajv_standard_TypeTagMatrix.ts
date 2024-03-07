import typia from "typia";
import { TypeTagMatrix } from "../../../../structures/TypeTagMatrix";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_TypeTagMatrix =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagMatrix",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagMatrix",
      },
    ],
    components: {
      schemas: {
        TypeTagMatrix: {
          $id: "#/components/schemas/TypeTagMatrix",
          type: "object",
          properties: {
            matrix: {
              type: "array",
              items: {
                type: "array",
                items: {
                  type: "string",
                  format: "uuid",
                },
                maxItems: 4,
                minItems: 4,
              },
              maxItems: 3,
              minItems: 3,
            },
          },
          required: ["matrix"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
