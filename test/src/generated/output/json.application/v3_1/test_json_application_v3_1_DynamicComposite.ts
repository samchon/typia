import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";

export const test_json_application_v3_1_DynamicComposite =
  _test_json_application({
    version: "3.1",
    name: "DynamicComposite",
  })({
    version: "3.1",
    components: {
      schemas: {
        DynamicComposite: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "name"],
          additionalProperties: {
            oneOf: [
              {
                type: "number",
              },
              {
                type: "string",
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
        $ref: "#/components/schemas/DynamicComposite",
      },
    ],
  });
