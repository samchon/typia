import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";

export const test_json_application_v3_1_TupleRestArray = _test_json_application(
  {
    version: "3.1",
    name: "TupleRestArray",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      TupleRestArray: {
        type: "array",
        prefixItems: [
          {
            type: "boolean",
          },
          {
            type: "number",
          },
        ],
        additionalItems: {},
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TupleRestArray",
    },
  ],
});
