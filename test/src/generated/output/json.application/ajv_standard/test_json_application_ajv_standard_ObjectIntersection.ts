import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_ajv_standard_ObjectIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            name: {
              type: "string",
            },
            vulnerable: {
              type: "boolean",
            },
          },
          required: ["email", "name", "vulnerable"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
