import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDate } from "../../../../structures/ObjectDate";

export const test_json_application_v3_0_ObjectDate = _test_json_application({
  version: "3.0",
  name: "ObjectDate",
})({
  version: "3.0",
  components: {
    schemas: {
      ObjectDate: {
        type: "object",
        properties: {
          classDate: {
            type: "string",
            format: "date-time",
            nullable: true,
          },
          date: {
            type: "string",
            format: "date",
            nullable: true,
          },
          datetime: {
            type: "string",
            format: "date-time",
            nullable: true,
          },
          time: {
            type: "string",
            format: "time",
            nullable: true,
          },
          duration: {
            type: "string",
            format: "duration",
            nullable: true,
          },
        },
        nullable: false,
        required: ["date", "datetime", "time", "duration"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectDate",
    },
  ],
});
