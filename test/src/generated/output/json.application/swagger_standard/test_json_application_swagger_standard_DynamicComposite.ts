import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";

export const test_json_application_swagger_standard_DynamicComposite =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicComposite",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicComposite",
      },
    ],
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
          nullable: false,
          required: ["id", "name"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
