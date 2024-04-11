import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";

export const test_json_application_v3_0_ObjectDynamic = _test_json_application({
  version: "3.0",
  name: "ObjectDynamic",
})({
  version: "3.0",
  components: {
    schemas: {
      ObjectDynamic: {
        type: "object",
        properties: {},
        nullable: false,
        additionalProperties: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              type: "boolean",
            },
          ],
        },
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectDynamic",
    },
  ],
});
