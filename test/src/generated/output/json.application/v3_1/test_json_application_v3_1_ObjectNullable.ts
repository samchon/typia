import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_v3_1_ObjectNullable = _test_json_application(
  {
    version: "3.1",
    name: "ObjectNullable",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      ObjectNullable: {
        $ref: "#/components/schemas/ObjectNullable",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectNullable",
    },
  ],
});
