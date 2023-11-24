import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_json_application_ajv_DynamicTemplate = _test_json_application(
  "ajv",
)("DynamicTemplate")({
  schemas: [
    {
      $ref: "#/components/schemas/DynamicTemplate",
    },
  ],
  components: {
    schemas: {
      DynamicTemplate: {
        $id: "#/components/schemas/DynamicTemplate",
        type: "object",
        properties: {},
        "x-typia-jsDocTags": [],
        patternProperties: {
          "^(prefix_(.*))": {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          "((.*)_postfix)$": {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          "^(value_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          "^(between_(.*)_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
          },
        },
      },
    },
  },
  purpose: "ajv",
});
