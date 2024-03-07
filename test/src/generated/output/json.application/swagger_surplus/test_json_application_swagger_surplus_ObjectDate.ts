import typia from "typia";
import { ObjectDate } from "../../../../structures/ObjectDate";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectDate =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
          type: "object",
          properties: {
            classDate: {
              type: "string",
              format: "date-time",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            date: {
              type: "string",
              format: "date",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"date">',
                  kind: "format",
                  value: "date",
                  validate: "/^(\\d{4})-(\\d{2})-(\\d{2})$/.test($input)",
                  exclusive: ["format", "pattern"],
                },
              ],
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            datetime: {
              type: "string",
              format: "date-time",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"date-time">',
                  kind: "format",
                  value: "date-time",
                  validate: "!isNaN(new Date($input).getTime())",
                  exclusive: ["format", "pattern"],
                },
              ],
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            time: {
              type: "string",
              format: "time",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"time">',
                  kind: "format",
                  value: "time",
                  validate:
                    "/^(\\d\\d):(\\d\\d):(\\d\\d(?:\\.\\d+)?)(z|([+-])(\\d\\d)(?::?(\\d\\d))?)?$/i.test($input)",
                  exclusive: ["format", "pattern"],
                },
              ],
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            duration: {
              type: "string",
              format: "duration",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"duration">',
                  kind: "format",
                  value: "duration",
                  validate:
                    "/^P(?!$)((\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?|(\\d+W)?)$/.test($input)",
                  exclusive: ["format", "pattern"],
                },
              ],
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["date", "datetime", "time", "duration"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
