import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagFormat } from "../../../../structures/TypeTagFormat";

export const test_json_application_swagger_standard_TypeTagFormat =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagFormat",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagFormat",
      },
    ],
    components: {
      schemas: {
        TypeTagFormat: {
          type: "object",
          properties: {
            uuid: {
              type: "string",
              format: "uuid",
            },
            email: {
              type: "string",
              format: "email",
            },
            url: {
              type: "string",
              format: "url",
            },
            ipv4: {
              type: "string",
              format: "ipv4",
            },
            ipv6: {
              type: "string",
              format: "ipv6",
            },
            date: {
              type: "string",
              format: "date",
            },
            date_time: {
              type: "string",
              format: "date-time",
            },
          },
          nullable: false,
          required: [
            "uuid",
            "email",
            "url",
            "ipv4",
            "ipv6",
            "date",
            "date_time",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
