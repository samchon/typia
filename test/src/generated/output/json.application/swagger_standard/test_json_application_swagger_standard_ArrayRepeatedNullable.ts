import typia from "typia";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ArrayRepeatedNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
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
          oneOf: [
            {
              type: "string",
              nullable: true,
            },
            {
              type: "number",
              nullable: true,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedNullable",
              },
              nullable: true,
            },
          ],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
