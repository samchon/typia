import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_json_application_swagger_standard_ToJsonDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonDouble",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonDouble.Child",
      },
    ],
    components: {
      schemas: {
        "ToJsonDouble.Child": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            flag: {
              type: "boolean",
            },
          },
          nullable: false,
          required: ["id", "flag"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
