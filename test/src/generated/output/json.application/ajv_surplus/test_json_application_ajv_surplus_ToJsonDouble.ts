import typia from "typia";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ToJsonDouble =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ToJsonDouble.Child",
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
          required: ["id", "flag"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
