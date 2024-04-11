import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";

export const test_json_application_v3_0_ToJsonTuple = _test_json_application({
  version: "3.0",
  name: "ToJsonTuple",
})({
  version: "3.0",
  components: {
    schemas: {
      ToJsonTuple: {
        type: "array",
        items: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              type: "boolean",
            },
            {
              $ref: "#/components/schemas/ToJsonTuple.IObject",
            },
          ],
        },
        minItems: 4,
        maxItems: 4,
      },
      "ToJsonTuple.IObject": {
        $ref: "#/components/schemas/ToJsonTuple.IHobby",
      },
      "ToJsonTuple.IHobby": {
        type: "object",
        properties: {
          code: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        nullable: false,
        required: ["code", "name"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ToJsonTuple",
    },
  ],
});
