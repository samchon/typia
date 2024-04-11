import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicNever } from "../../../../structures/DynamicNever";

export const test_json_application_v3_0_DynamicNever = _test_json_application({
  version: "3.0",
  name: "DynamicNever",
})({
  version: "3.0",
  components: {
    schemas: {
      DynamicNever: {
        type: "object",
        properties: {},
        nullable: false,
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/DynamicNever",
    },
  ],
});
