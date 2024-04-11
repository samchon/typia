import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicClass } from "../../../../structures/AtomicClass";

export const test_json_application_v3_1_AtomicClass = _test_json_application({
  version: "3.1",
  name: "AtomicClass",
})({
  version: "3.1",
  components: {
    schemas: {
      AtomicClass: {
        type: "array",
        prefixItems: [
          {
            type: "boolean",
          },
          {
            type: "boolean",
          },
          {
            type: "boolean",
          },
          {
            type: "number",
          },
          {
            type: "number",
          },
          {
            type: "number",
          },
          {
            type: "string",
          },
          {
            type: "string",
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
      $ref: "#/components/schemas/AtomicClass",
    },
  ],
});
