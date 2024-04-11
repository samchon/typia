import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";

export const test_json_application_v3_0_AtomicSimple = _test_json_application({
  version: "3.0",
  name: "AtomicSimple",
})({
  version: "3.0",
  components: {
    schemas: {
      AtomicSimple: {
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
        minItems: 3,
        maxItems: 3,
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/AtomicSimple",
    },
  ],
});
