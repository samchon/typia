import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";

export const test_json_application_ajv_standard_ClassPropertyAssignment =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            name: {
              type: "string",
            },
            note: {
              type: "string",
              enum: ["assignment"],
            },
            editable: {
              type: "boolean",
              enum: [false],
            },
            incremental: {
              type: "boolean",
            },
          },
          required: ["id", "name", "note", "editable", "incremental"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
