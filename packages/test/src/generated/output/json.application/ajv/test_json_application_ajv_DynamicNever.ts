import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicNever } from "../../../../structures/DynamicNever";

export const test_json_application_ajv_DynamicNever = _test_json_application(
  "ajv",
)("DynamicNever")({
  schemas: [
    {
      $ref: "#/components/schemas/DynamicNever",
    },
  ],
  components: {
    schemas: {
      DynamicNever: {
        $id: "#/components/schemas/DynamicNever",
        type: "object",
        properties: {},
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
