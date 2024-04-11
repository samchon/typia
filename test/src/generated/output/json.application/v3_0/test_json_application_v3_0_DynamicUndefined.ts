import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";

export const test_json_application_v3_0_DynamicUndefined =
  _test_json_application({
    version: "3.0",
    name: "DynamicUndefined",
  })({
    version: "3.0",
    components: {
      schemas: {
        DynamicUndefined: {
          type: "object",
          properties: {},
          nullable: false,
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/DynamicUndefined",
      },
    ],
  });
