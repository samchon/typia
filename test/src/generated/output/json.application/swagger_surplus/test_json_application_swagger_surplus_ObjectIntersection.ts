import typia from "typia";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectIntersection =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["email", "name", "vulnerable"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
