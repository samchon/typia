import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_json_application_ajv_standard_ObjectHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectHierarchical",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectHierarchical.ICustomer",
      },
    ],
    components: {
      schemas: {
        "ObjectHierarchical.ICustomer": {
          $id: "#/components/schemas/ObjectHierarchical.ICustomer",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            channel: {
              $ref: "#/components/schemas/ObjectHierarchical.IChannel",
            },
            member: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectHierarchical.IMember",
                },
              ],
            },
            account: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                },
              ],
            },
            href: {
              type: "string",
            },
            referrer: {
              type: "string",
            },
            ip: {
              type: "array",
              items: [
                {
                  type: "number",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "number",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "number",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "number",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              ],
              minItems: 4,
              maxItems: 4,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
          },
          required: [
            "id",
            "channel",
            "member",
            "account",
            "href",
            "referrer",
            "ip",
            "created_at",
          ],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IChannel": {
          $id: "#/components/schemas/ObjectHierarchical.IChannel",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            code: {
              type: "string",
            },
            name: {
              type: "string",
            },
            sequence: {
              type: "number",
            },
            exclusive: {
              type: "boolean",
            },
            priority: {
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
          },
          required: [
            "id",
            "code",
            "name",
            "sequence",
            "exclusive",
            "priority",
            "created_at",
          ],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.ITimestamp": {
          $id: "#/components/schemas/ObjectHierarchical.ITimestamp",
          type: "object",
          properties: {
            time: {
              type: "number",
            },
            zone: {
              type: "number",
            },
          },
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IMember": {
          $id: "#/components/schemas/ObjectHierarchical.IMember",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
            },
            enterprise: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectHierarchical.IEnterprise",
                },
              ],
            },
            emails: {
              type: "array",
              items: {
                type: "string",
              },
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
            authorized: {
              type: "boolean",
            },
          },
          required: [
            "id",
            "account",
            "enterprise",
            "emails",
            "created_at",
            "authorized",
          ],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IAccount": {
          $id: "#/components/schemas/ObjectHierarchical.IAccount",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            code: {
              type: "string",
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
          },
          required: ["id", "code", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IEnterprise": {
          $id: "#/components/schemas/ObjectHierarchical.IEnterprise",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
            },
            name: {
              type: "string",
            },
            grade: {
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
          },
          required: ["id", "account", "name", "grade", "created_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
