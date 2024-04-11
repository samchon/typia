import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartial } from "../../../../structures/ObjectPartial";

export const test_json_application_v3_1_ObjectPartial = _test_json_application({
  version: "3.1",
  name: "ObjectPartial",
})({
  version: "3.1",
  components: {
    schemas: {
      "PartialObjectPartial.IBase": {
        $ref: "#/components/schemas/PartialObjectPartial.IBase",
        description: "Make all properties in T optional",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/PartialObjectPartial.IBase",
    },
  ],
});
