import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";

export const test_json_application_v3_1_ArrayRepeatedNullable =
  _test_json_application({
    version: "3.1",
    name: "ArrayRepeatedNullable",
  })({
    version: "3.1",
    components: {
      schemas: {
        ArrayRepeatedNullable: {
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
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedNullable",
      },
    ],
  });
