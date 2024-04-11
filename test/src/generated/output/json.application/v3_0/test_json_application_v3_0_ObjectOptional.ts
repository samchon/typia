import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_json_application_v3_0_ObjectOptional = _test_json_application(
  {
    version: "3.0",
    name: "ObjectOptional",
  },
)({
  version: "3.0",
  components: {
    schemas: {
      ObjectOptional: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          sequence: {
            type: "number",
          },
        },
        nullable: false,
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectOptional",
    },
  ],
});
