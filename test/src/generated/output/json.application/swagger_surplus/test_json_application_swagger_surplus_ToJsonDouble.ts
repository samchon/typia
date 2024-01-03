import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_json_application_swagger_surplus_ToJsonDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            flag: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "flag"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
