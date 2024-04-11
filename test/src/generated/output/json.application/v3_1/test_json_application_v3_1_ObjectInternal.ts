import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";

export const test_json_application_v3_1_ObjectInternal = _test_json_application(
  {
    version: "3.1",
    name: "ObjectInternal",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      ObjectInternal: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        required: ["id", "name"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectInternal",
    },
  ],
});
