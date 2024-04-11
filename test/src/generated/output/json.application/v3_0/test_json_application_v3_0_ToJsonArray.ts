import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";

export const test_json_application_v3_0_ToJsonArray = _test_json_application({
  version: "3.0",
  name: "ToJsonArray",
})({
  version: "3.0",
  components: {
    schemas: {
      ToJsonArray: {
        type: "array",
        items: {
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
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ToJsonArray.IObject",
              },
            },
          ],
        },
        minItems: 4,
        maxItems: 4,
      },
      "ToJsonArray.IObject": {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
        },
        nullable: false,
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
