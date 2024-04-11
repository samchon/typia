import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagType } from "../../../../structures/TypeTagType";

export const test_json_application_v3_1_TypeTagType = _test_json_application({
  version: "3.1",
  name: "TypeTagType",
})({
  version: "3.1",
  components: {
    schemas: {
      TypeTagType: {
        $ref: "#/components/schemas/TypeTagType",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagType",
    },
  ],
});
