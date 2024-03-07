import typia from "typia";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ClassPropertyAssignment =
  _test_json_application({
    purpose: "swagger",
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
    purpose: "swagger",
    surplus: false,
  });
