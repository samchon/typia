import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";

export const test_json_application_v3_1_ToJsonTuple = _test_json_application({
  version: "3.1",
  name: "ToJsonTuple",
})({
  version: "3.1",
  components: {
    schemas: {
      ToJsonTuple: {
        type: "array",
        prefixItems: [
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
        additionalItems: {
          $ref: "#/components/schemas/ToJsonTuple.IObject",
        },
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
