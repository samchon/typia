import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassMethod } from "../../../../structures/ClassMethod";

export const test_json_application_v3_1_ClassMethod = _test_json_application({
  version: "3.1",
  name: "ClassMethod",
})({
  version: "3.1",
  components: {
    schemas: {
      "ClassMethod.Animal": {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          age: {
            type: "number",
          },
        },
        required: ["name", "age"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ClassMethod.Animal",
    },
  ],
});
