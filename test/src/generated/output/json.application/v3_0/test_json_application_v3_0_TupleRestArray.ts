import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";

export const test_json_application_v3_0_TupleRestArray = _test_json_application(
  {
    version: "3.0",
    name: "TupleRestArray",
  },
)({
  version: "3.0",
  components: {
    schemas: {
      TupleRestArray: {
        type: "array",
        items: {
          oneOf: [
            {
              type: "boolean",
            },
            {
              type: "number",
            },
            {
              type: "array",
              items: {
                type: "string",
              },
            },
          ],
        },
        minItems: 2,
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TupleRestArray",
    },
  ],
});
