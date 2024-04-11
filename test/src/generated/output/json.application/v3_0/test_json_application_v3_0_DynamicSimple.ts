import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_json_application_v3_0_DynamicSimple = _test_json_application({
  version: "3.0",
  name: "DynamicSimple",
})({
  version: "3.0",
  components: {
    schemas: {
      DynamicSimple: {
        type: "object",
        properties: {
          value: {
            type: "object",
            properties: {},
            nullable: false,
            additionalProperties: {
              type: "number",
            },
          },
        },
        nullable: false,
        required: ["value"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/DynamicSimple",
    },
  ],
});
