import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDate } from "../../../../structures/ObjectDate";

export const test_json_application_ajv_standard_ObjectDate =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectDate",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectDate",
      },
    ],
    components: {
      schemas: {
        ObjectDate: {
          $id: "#/components/schemas/ObjectDate",
          type: "object",
          properties: {
            classDate: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                  format: "date-time",
                },
              ],
            },
            date: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                  format: "date",
                },
              ],
            },
            datetime: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                  format: "date-time",
                },
              ],
            },
            time: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                  format: "time",
                },
              ],
            },
            duration: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                  format: "duration",
                },
              ],
            },
          },
          required: ["date", "datetime", "time", "duration"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
