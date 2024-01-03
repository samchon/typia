import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_json_application_ajv_standard_DynamicTemplate =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicTemplate",
  })({
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
              type: "string",
            },
            "((.*)_postfix)$": {
              type: "string",
            },
            "^(value_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              type: "number",
            },
            "^(between_(.*)_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
              type: "boolean",
            },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
