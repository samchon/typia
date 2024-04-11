import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicAlias } from "../../../../structures/AtomicAlias";

export const test_json_application_v3_1_AtomicAlias = _test_json_application({
  version: "3.1",
  name: "AtomicAlias",
})({
  version: "3.1",
  components: {
    schemas: {
      AtomicAlias: {
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
      $ref: "#/components/schemas/AtomicAlias",
    },
  ],
});
