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
        $ref: "#/components/schemas/TypeTagArray",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagArray",
    },
  ],
});
