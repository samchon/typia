import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../../structures/ObjectUndefined";

export const test_json_application_ajv_standard_ObjectUndefined =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUndefined",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUndefined",
      },
    ],
    components: {
      schemas: {
        ObjectUndefined: {
          $id: "#/components/schemas/ObjectUndefined",
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUndefined.ILecture",
          },
        },
        "ObjectUndefined.ILecture": {
          $id: "#/components/schemas/ObjectUndefined.ILecture",
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            professor: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
              ],
            },
            classroom: {
              $ref: "#/components/schemas/ObjectUndefined.IClassroom",
            },
            grade: {
              type: "number",
            },
            unknown: {},
          },
          required: ["name", "unknown"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUndefined.IClassroom": {
          $id: "#/components/schemas/ObjectUndefined.IClassroom",
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
