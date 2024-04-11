import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

export const test_json_application_v3_0_DynamicArray = _test_json_application({
  version: "3.0",
  name: "DynamicArray",
})({
  version: "3.0",
  components: {
    schemas: {
      DynamicArray: {
        type: "object",
        properties: {
          value: {
            type: "object",
            properties: {},
            nullable: false,
            additionalProperties: {
              type: "array",
              items: {
                type: "string",
              },
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
      $ref: "#/components/schemas/DynamicArray",
    },
  ],
});
