import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_json_application_v3_0_ArrayRepeatedRequired =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedRequired",
  })({
    version: "3.0",
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
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedRequired",
      },
    ],
  });
