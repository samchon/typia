import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_ajv_surplus_ObjectIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectIntersection",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectIntersection",
      },
    ],
    components: {
      schemas: {
        ObjectIntersection: {
          $id: "#/components/schemas/ObjectIntersection",
          type: "object",
          properties: {
            email: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            vulnerable: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["email", "name", "vulnerable"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
