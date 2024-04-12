import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

export const test_json_application_v3_1_DynamicArray = _test_json_application({
  version: "3.1",
  name: "DynamicArray",
})({
  version: "3.1",
  components: {
    schemas: {
      DynamicArray: {
        type: "object",
        properties: {
          value: {
            type: "object",
            properties: {},
            additionalProperties: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
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
