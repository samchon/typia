import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";

export const test_json_application_swagger_ArrayMatrix = _test_json_application(
  "swagger",
)("ArrayMatrix")({
  schemas: [
    {
      $ref: "#/components/schemas/ArrayMatrix",
    },
  ],
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
  purpose: "swagger",
});
