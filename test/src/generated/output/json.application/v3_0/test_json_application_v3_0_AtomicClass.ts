import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicClass } from "../../../../structures/AtomicClass";

export const test_json_application_v3_0_AtomicClass = _test_json_application({
  version: "3.0",
  name: "AtomicClass",
})({
  version: "3.0",
  components: {
    schemas: {
      AtomicClass: {
        type: "array",
        items: {
          oneOf: [
            {
              type: "boolean",
            },
            {
              type: "number",
            },
            {
              type: "string",
            },
          ],
        },
        minItems: 9,
        maxItems: 9,
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/AtomicClass",
    },
  ],
});
