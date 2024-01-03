import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_json_application_swagger_standard_ObjectHierarchical =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            channel: {
              $ref: "#/components/schemas/ObjectHierarchical.IChannel",
            },
            member: {
              $ref: "#/components/schemas/ObjectHierarchical.IMember.Nullable",
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount.Nullable",
            },
            href: {
              type: "string",
            },
            referrer: {
              type: "string",
            },
            ip: {
              type: "array",
              items: {
                type: "number",
              },
              minItems: 4,
              maxItems: 4,
              "x-typia-tuple": {
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
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
          },
          nullable: false,
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
        },
        "ObjectHierarchical.IChannel": {
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
          nullable: false,
          required: [
            "id",
            "code",
            "name",
            "sequence",
            "exclusive",
            "priority",
            "created_at",
          ],
        },
        "ObjectHierarchical.ITimestamp": {
          type: "object",
          properties: {
            time: {
              type: "number",
            },
            zone: {
              type: "number",
            },
          },
          nullable: false,
          required: ["time", "zone"],
        },
        "ObjectHierarchical.IMember.Nullable": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
            },
            enterprise: {
              $ref: "#/components/schemas/ObjectHierarchical.IEnterprise.Nullable",
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
          nullable: true,
          required: [
            "id",
            "account",
            "enterprise",
            "emails",
            "created_at",
            "authorized",
          ],
        },
        "ObjectHierarchical.IAccount": {
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
          nullable: false,
          required: ["id", "code", "created_at"],
        },
        "ObjectHierarchical.IEnterprise.Nullable": {
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
          nullable: true,
          required: ["id", "account", "name", "grade", "created_at"],
        },
        "ObjectHierarchical.IAccount.Nullable": {
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
          nullable: true,
          required: ["id", "code", "created_at"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
