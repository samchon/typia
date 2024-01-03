import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";

export const test_json_application_ajv_standard_DynamicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicUnion",
  })({
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
              type: "string",
            },
            "^(prefix_(.*))": {
              type: "string",
            },
            "((.*)_postfix)$": {
              type: "string",
            },
            "^(value_between_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$":
              {
                type: "number",
              },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
