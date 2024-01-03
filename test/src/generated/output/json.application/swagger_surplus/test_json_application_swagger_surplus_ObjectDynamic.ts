import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";

export const test_json_application_swagger_surplus_ObjectDynamic =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {},
          nullable: false,
          "x-typia-jsDocTags": [],
          "x-typia-additionalProperties": {
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
    purpose: "swagger",
    surplus: true,
  });
