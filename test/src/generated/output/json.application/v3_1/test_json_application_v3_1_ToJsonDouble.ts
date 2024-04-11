import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_json_application_v3_1_ToJsonDouble = _test_json_application({
  version: "3.1",
  name: "ToJsonDouble",
})({
  version: "3.1",
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
