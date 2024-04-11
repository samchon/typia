import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";

export const test_json_application_v3_0_ClassPropertyAssignment =
  _test_json_application({
    version: "3.0",
    name: "ClassPropertyAssignment",
  })({
    version: "3.0",
    components: {
      schemas: {
        ClassPropertyAssignment: {
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
          nullable: false,
          required: ["id", "name", "note", "editable", "incremental"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ClassPropertyAssignment",
      },
    ],
  });
