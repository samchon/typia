import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";

export const test_json_application_ajv_surplus_ClassPropertyAssignment =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ClassPropertyAssignment",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ClassPropertyAssignment",
      },
    ],
    components: {
      schemas: {
        ClassPropertyAssignment: {
          $id: "#/components/schemas/ClassPropertyAssignment",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            note: {
              type: "string",
              enum: ["assignment"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            editable: {
              type: "boolean",
              enum: [false],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            incremental: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "note", "editable", "incremental"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
