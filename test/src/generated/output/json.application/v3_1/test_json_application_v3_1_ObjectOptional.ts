import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_json_application_v3_1_ObjectOptional = _test_json_application(
  {
    version: "3.1",
    name: "ObjectOptional",
  },
)({
  version: "3.1",
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
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectOptional",
    },
  ],
});
