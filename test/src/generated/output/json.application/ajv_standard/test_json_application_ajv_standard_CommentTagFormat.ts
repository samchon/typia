import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../../structures/CommentTagFormat";

export const test_json_application_ajv_standard_CommentTagFormat =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagFormat",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagFormat",
      },
    ],
    components: {
      schemas: {
        CommentTagFormat: {
          $id: "#/components/schemas/CommentTagFormat",
          type: "object",
          properties: {
            uuid: {
              type: "string",
              format: "uuid",
              description: "Universally Unique Identifier.",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email address",
            },
            url: {
              type: "string",
              format: "url",
              description: "URL address.",
            },
            ipv4: {
              type: "string",
              format: "ipv4",
              description: "IPv4 address.",
            },
            ipv6: {
              type: "string",
              format: "ipv6",
              description: "IPv6 address.",
            },
            date: {
              type: "string",
              format: "date",
              description: "Date only.",
            },
            date_time: {
              type: "string",
              format: "date-time",
              description: "Date and time.",
            },
            custom: {
              type: "string",
              description: "A custom format string.",
            },
          },
          required: [
            "uuid",
            "email",
            "url",
            "ipv4",
            "ipv6",
            "date",
            "date_time",
            "custom",
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
