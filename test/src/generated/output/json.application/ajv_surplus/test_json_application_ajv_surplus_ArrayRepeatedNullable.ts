import typia from "typia";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ArrayRepeatedNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRepeatedNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedNullable",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedNullable: {
          $id: "#/components/schemas/ArrayRepeatedNullable",
          oneOf: [
            {
              type: "null",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedNullable",
              },
            },
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
