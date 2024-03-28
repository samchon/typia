import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";

export const test_json_application_ajv_surplus_ObjectDynamic =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectDynamic",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectDynamic",
      },
    ],
    components: {
      schemas: {
        ObjectDynamic: {
          $id: "#/components/schemas/ObjectDynamic",
          type: "object",
          properties: {},
          "x-typia-jsDocTags": [],
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
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
