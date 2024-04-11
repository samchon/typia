import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";

export const test_json_application_v3_0_ArrayRepeatedNullable =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedNullable",
  })({
    version: "3.0",
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
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedNullable",
      },
    ],
  });
