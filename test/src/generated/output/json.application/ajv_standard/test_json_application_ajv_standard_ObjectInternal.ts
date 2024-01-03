import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";

export const test_json_application_ajv_standard_ObjectInternal =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
