import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../../structures/TypeTagCustom";

export const test_json_application_v3_1_TypeTagCustom = _test_json_application({
  version: "3.1",
  name: "TypeTagCustom",
})({
  version: "3.1",
  components: {
    schemas: {
      TypeTagCustom: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "uuid",
          },
          dollar: {
            type: "string",
            "x-typia-monetary": "dollar",
          },
          postfix: {
            type: "string",
            "x-typia-postfix": "abcd",
          },
          powerOf: {
            type: "number",
            "x-typia-powerOf": 2,
          },
        },
        required: ["id", "dollar", "postfix", "powerOf"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagCustom",
    },
  ],
});
