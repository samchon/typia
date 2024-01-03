import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_json_application_ajv_standard_ToJsonDouble =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ToJsonDouble.Child",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            flag: {
              type: "boolean",
            },
          },
          required: ["id", "flag"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
