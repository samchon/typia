import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicNever } from "../../../../structures/DynamicNever";

export const test_json_application_ajv_standard_DynamicNever =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicNever",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicNever",
      },
    ],
    components: {
      schemas: {
        DynamicNever: {
          $id: "#/components/schemas/DynamicNever",
          type: "object",
          properties: {},
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
