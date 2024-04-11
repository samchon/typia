import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";

export const test_json_application_v3_1_ToJsonArray = _test_json_application({
  version: "3.1",
  name: "ToJsonArray",
})({
  version: "3.1",
  components: {
    schemas: {
      ToJsonArray: {
        type: "array",
        prefixItems: [
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
          {
            type: "array",
            items: {
              $ref: "#/components/schemas/ToJsonArray.IObject",
            },
          },
        ],
        additionalItems: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ToJsonArray.IObject",
          },
        },
      },
      "ToJsonArray.IObject": {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
        },
        required: ["id"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ToJsonArray",
    },
  ],
});
