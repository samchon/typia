import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";

export const test_json_application_v3_1_ClassPropertyAssignment =
  _test_json_application({
    version: "3.1",
    name: "ClassPropertyAssignment",
  })({
    version: "3.1",
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
              const: "assignment",
            },
            editable: {
              const: false,
            },
            incremental: {
              type: "boolean",
            },
          },
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
