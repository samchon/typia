import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_v3_1_ObjectRequired = _test_json_application(
  {
    version: "3.1",
    name: "ObjectRequired",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      "RequiredObjectRequired.IBase": {
        $ref: "#/components/schemas/RequiredObjectRequired.IBase",
        description: "Make all properties in T required",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/RequiredObjectRequired.IBase",
    },
  ],
});
