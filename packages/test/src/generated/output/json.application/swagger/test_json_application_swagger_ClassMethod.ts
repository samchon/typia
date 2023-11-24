import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassMethod } from "../../../../structures/ClassMethod";

export const test_json_application_swagger_ClassMethod = _test_json_application(
  "swagger",
)("ClassMethod")({
  schemas: [
    {
      $ref: "#/components/schemas/ClassMethod.Animal",
    },
  ],
  components: {
    schemas: {
      "ClassMethod.Animal": {
        type: "object",
        properties: {
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          age: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
        },
        nullable: false,
        required: ["name", "age"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "swagger",
});
