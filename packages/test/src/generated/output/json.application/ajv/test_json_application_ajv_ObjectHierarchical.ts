import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_json_application_ajv_ObjectHierarchical =
  _test_json_application("ajv")("ObjectHierarchical")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            channel: {
              $ref: "#/components/schemas/ObjectHierarchical.IChannel",
            },
            member: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectHierarchical.IMember",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            account: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            href: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            referrer: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            ip: {
              type: "array",
              items: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  "x-typia-rest": false,
                  type: "number",
                },
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  "x-typia-rest": false,
                  type: "number",
                },
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  "x-typia-rest": false,
                  type: "number",
                },
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  "x-typia-rest": false,
                  type: "number",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            code: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            sequence: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            exclusive: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            priority: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            zone: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
            },
            enterprise: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectHierarchical.IEnterprise",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            emails: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
            },
            authorized: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            code: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            grade: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
  });
