import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_ajv_ObjectIntersection =
  _test_json_application("ajv")("ObjectIntersection")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            vulnerable: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
          },
          required: ["email", "name", "vulnerable"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
