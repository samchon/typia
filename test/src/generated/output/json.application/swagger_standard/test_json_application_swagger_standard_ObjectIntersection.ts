import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_swagger_standard_ObjectIntersection =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["email", "name", "vulnerable"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
