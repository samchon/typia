import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";

export const test_json_application_ajv_DynamicUnion = _test_json_application(
  "ajv",
)("DynamicUnion")({
  schemas: [
    {
      $ref: "#/components/schemas/DynamicUnion",
    },
  ],
  components: {
    schemas: {
      DynamicUnion: {
        $id: "#/components/schemas/DynamicUnion",
        type: "object",
        properties: {},
        "x-typia-jsDocTags": [],
        patternProperties: {
          "^[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$": {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
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
          "^(value_between_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$":
            {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
        },
      },
    },
  },
  purpose: "ajv",
});
