import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_json_application_v3_0_ArrayRecursive = _test_json_application(
  {
    version: "3.0",
    name: "ArrayRecursive",
  },
)({
  version: "3.0",
  components: {
    schemas: {
      "ArrayRecursive.ICategory": {
        type: "object",
        properties: {
          children: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ArrayRecursive.ICategory",
            },
          },
          id: {
            type: "number",
          },
          code: {
            type: "string",
          },
          sequence: {
            type: "number",
          },
          created_at: {
            $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
          },
        },
        nullable: false,
        required: ["children", "id", "code", "sequence", "created_at"],
      },
      "ArrayRecursive.ITimestamp": {
        type: "object",
        properties: {
          time: {
            type: "number",
          },
          zone: {
            type: "number",
          },
        },
        nullable: false,
        required: ["time", "zone"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ArrayRecursive.ICategory",
    },
  ],
});
