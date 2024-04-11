import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../../structures/TypeTagMatrix";

export const test_json_application_v3_0_TypeTagMatrix = _test_json_application({
  version: "3.0",
  name: "TypeTagMatrix",
})({
  version: "3.0",
  components: {
    schemas: {
      TypeTagMatrix: {
        type: "object",
        properties: {
          matrix: {
            type: "array",
            items: {
              type: "array",
              items: {
                type: "string",
                format: "uuid",
              },
              minItems: 4,
              maxItems: 4,
            },
            minItems: 3,
            maxItems: 3,
          },
        },
        nullable: false,
        required: ["matrix"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagMatrix",
    },
  ],
});
