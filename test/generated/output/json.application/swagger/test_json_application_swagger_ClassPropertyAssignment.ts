import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";

export const test_json_application_swagger_ClassPropertyAssignment =
  _test_json_application("swagger")("ClassPropertyAssignment")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            note: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["assignment"],
            },
            editable: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
              enum: [false],
            },
            incremental: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["id", "name", "note", "editable", "incremental"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
