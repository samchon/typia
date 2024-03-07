import typia from "typia";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ArrayRepeatedRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedRequired",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedRequired",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedRequired: {
          $id: "#/components/schemas/ArrayRepeatedRequired",
          oneOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedRequired",
              },
            },
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
