import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArray } from "../../../../structures/TypeTagArray";

export const test_json_application_v3_1_TypeTagArray = _test_json_application({
  version: "3.1",
  name: "TypeTagArray",
})({
  version: "3.1",
  components: {
    schemas: {
      TypeTagArray: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TypeTagArray.Type",
            },
          },
        },
        required: ["value"],
      },
      "TypeTagArray.Type": {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: {
              type: "string",
              format: "uuid",
            },
            minItems: 3,
            maxItems: 3,
          },
          minItems: {
            type: "array",
            items: {
              type: "number",
              minimum: 3,
            },
            minItems: 3,
          },
          both: {
            type: "array",
            items: {
              type: "string",
              format: "uuid",
            },
            minItems: 3,
            maxItems: 7,
          },
          equal: {
            type: "array",
            items: {
              type: "number",
              minimum: 10,
              maximum: 10,
            },
            minItems: 10,
            maxItems: 10,
          },
        },
        required: ["items", "minItems", "both", "equal"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagArray",
    },
  ],
});
