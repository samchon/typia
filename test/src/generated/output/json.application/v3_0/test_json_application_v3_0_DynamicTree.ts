import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_v3_0_DynamicTree = _test_json_application({
  version: "3.0",
  name: "DynamicTree",
})({
  version: "3.0",
  components: {
    schemas: {
      DynamicTree: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          sequence: {
            type: "number",
          },
          children: {
            $ref: "#/components/schemas/RecordstringDynamicTree",
          },
        },
        nullable: false,
        required: ["id", "sequence", "children"],
      },
      RecordstringDynamicTree: {
        type: "object",
        properties: {},
        nullable: false,
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          $ref: "#/components/schemas/DynamicTree",
        },
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/DynamicTree",
    },
  ],
});
