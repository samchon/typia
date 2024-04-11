import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicUnion } from "../../../../structures/AtomicUnion";

export const test_json_application_v3_1_AtomicUnion = _test_json_application({
  version: "3.1",
  name: "AtomicUnion",
})({
  version: "3.1",
  components: {
    schemas: {
      AtomicUnion: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AtomicUnion.Union",
        },
      },
      "AtomicUnion.Union": {
        oneOf: [
          {
            type: "null",
          },
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
  schemas: [
    {
      $ref: "#/components/schemas/AtomicUnion",
    },
  ],
});
