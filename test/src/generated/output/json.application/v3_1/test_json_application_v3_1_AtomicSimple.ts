import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";

export const test_json_application_v3_1_AtomicSimple = _test_json_application({
  version: "3.1",
  name: "AtomicSimple",
})({
  version: "3.1",
  components: {
    schemas: {
      AtomicSimple: {
        type: "array",
        prefixItems: [
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
        additionalItems: {
          type: "string",
        },
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/AtomicSimple",
    },
  ],
});
