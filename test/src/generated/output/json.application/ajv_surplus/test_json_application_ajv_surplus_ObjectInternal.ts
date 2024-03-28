import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";

export const test_json_application_ajv_surplus_ObjectInternal =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectInternal",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectInternal",
      },
    ],
    components: {
      schemas: {
        ObjectInternal: {
          $id: "#/components/schemas/ObjectInternal",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
