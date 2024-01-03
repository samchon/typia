import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_json_application_ajv_surplus_ArrayRepeatedRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
    surplus: true,
  });
