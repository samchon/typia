import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_json_application_v3_0_ToJsonDouble = _test_json_application({
  version: "3.0",
  name: "ToJsonDouble",
})({
  version: "3.0",
  components: {
    schemas: {
      "ToJsonDouble.Child": {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          flag: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["id", "flag"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ToJsonDouble.Child",
    },
  ],
});
