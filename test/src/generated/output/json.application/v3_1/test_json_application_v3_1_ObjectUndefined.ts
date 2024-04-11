import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../../structures/ObjectUndefined";

export const test_json_application_v3_1_ObjectUndefined =
  _test_json_application({
    version: "3.1",
    name: "ObjectUndefined",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUndefined: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUndefined.ILecture",
          },
        },
        "ObjectUndefined.ILecture": {
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
        },
        "ObjectUndefined.IClassroom": {
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
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUndefined",
      },
    ],
  });
