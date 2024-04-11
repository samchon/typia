import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayUnion } from "../../../../structures/ArrayUnion";

export const test_json_application_v3_1_ArrayUnion = _test_json_application({
  version: "3.1",
  name: "ArrayUnion",
})({
  version: "3.1",
  components: {
    schemas: {
      ArrayUnion: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ArrayUnion.IUnion",
        },
      },
      "ArrayUnion.IUnion": {
        oneOf: [
          {
            type: "array",
            items: {
              type: "boolean",
            },
          },
          {
            type: "array",
            items: {
              type: "number",
            },
          },
          {
            type: "array",
            items: {
              type: "string",
            },
          },
        ],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ArrayUnion",
    },
  ],
});
