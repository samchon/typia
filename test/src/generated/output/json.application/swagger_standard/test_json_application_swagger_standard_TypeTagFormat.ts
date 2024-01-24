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
            byte: {
              type: "string",
              format: "byte",
            },
            password: {
              type: "string",
              format: "password",
            },
            regex: {
              type: "string",
              format: "regex",
            },
            uuid: {
              type: "string",
              format: "uuid",
            },
            email: {
              type: "string",
              format: "email",
            },
            hostname: {
              type: "string",
              format: "hostname",
            },
            ipv4: {
              type: "string",
              format: "ipv4",
            },
            ipv6: {
              type: "string",
              format: "ipv6",
            },
            uri: {
              type: "string",
              format: "uri",
            },
            uriReference: {
              type: "string",
              format: "uri-reference",
            },
            uriTemplate: {
              type: "string",
              format: "uri-template",
            },
            url: {
              type: "string",
              format: "url",
            },
            datetime: {
              type: "string",
              format: "date-time",
            },
            date: {
              type: "string",
              format: "date",
            },
            time: {
              type: "string",
              format: "time",
            },
            duration: {
              type: "string",
              format: "duration",
            },
            jsonPointer: {
              type: "string",
              format: "json-pointer",
            },
            relativeJsonPointer: {
              type: "string",
              format: "relative-json-pointer",
            },
          },
          nullable: false,
          required: [
            "byte",
            "password",
            "regex",
            "uuid",
            "email",
            "hostname",
            "ipv4",
            "ipv6",
            "uri",
            "uriReference",
            "uriTemplate",
            "url",
            "datetime",
            "date",
            "time",
            "duration",
            "jsonPointer",
            "relativeJsonPointer",
          ],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
