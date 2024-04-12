import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagLength } from "../../../../structures/TypeTagLength";

export const test_json_application_v3_1_TypeTagLength = _test_json_application({
  version: "3.1",
  name: "TypeTagLength",
})({
  version: "3.1",
  components: {
    schemas: {
      TypeTagLength: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TypeTagLength.Type",
            },
          },
        },
        required: ["value"],
      },
      "TypeTagLength.Type": {
        type: "object",
        properties: {
          fixed: {
            type: "string",
            minLength: 5,
            maxLength: 5,
          },
          minimum: {
            type: "string",
            minLength: 3,
          },
          maximum: {
            type: "string",
            maxLength: 7,
          },
          minimum_and_maximum: {
            type: "string",
            minLength: 3,
            maxLength: 7,
          },
          equal: {
            type: "string",
            minLength: 10,
            maxLength: 19,
          },
        },
        required: [
          "fixed",
          "minimum",
          "maximum",
          "minimum_and_maximum",
          "equal",
        ],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagLength",
    },
  ],
});
