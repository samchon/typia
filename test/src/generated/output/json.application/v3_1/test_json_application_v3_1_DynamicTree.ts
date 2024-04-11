import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_v3_1_DynamicTree = _test_json_application({
  version: "3.1",
  name: "DynamicTree",
})({
  version: "3.1",
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
        required: ["id", "sequence", "children"],
      },
      RecordstringDynamicTree: {
        $ref: "#/components/schemas/RecordstringDynamicTree",
        description: "Construct a type with a set of properties K of type T",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/DynamicTree",
    },
  ],
});
