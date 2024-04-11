import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";

export const test_json_application_v3_1_ArrayMatrix = _test_json_application({
  version: "3.1",
  name: "ArrayMatrix",
})({
  version: "3.1",
  components: {
    schemas: {
      ArrayMatrix: {
        type: "array",
        items: {
          type: "array",
          items: {
            type: "array",
            items: {
              type: "number",
            },
          },
        },
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ArrayMatrix",
    },
  ],
});
