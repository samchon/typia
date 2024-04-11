import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_json_application_v3_0_DynamicTemplate =
  _test_json_application({
    version: "3.0",
    name: "DynamicTemplate",
  })({
    version: "3.0",
    components: {
      schemas: {
        DynamicTemplate: {
          type: "object",
          properties: {},
          nullable: false,
          additionalProperties: {
            oneOf: [
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                type: "boolean",
              },
            ],
          },
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/DynamicTemplate",
      },
    ],
  });
