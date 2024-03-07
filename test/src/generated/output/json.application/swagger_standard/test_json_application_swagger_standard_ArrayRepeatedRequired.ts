import typia from "typia";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ArrayRepeatedRequired =
  _test_json_application({
    purpose: "swagger",
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
    purpose: "swagger",
    surplus: false,
  });
