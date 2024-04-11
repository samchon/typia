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
        $ref: "#/components/schemas/TypeTagLength",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagLength",
    },
  ],
});
