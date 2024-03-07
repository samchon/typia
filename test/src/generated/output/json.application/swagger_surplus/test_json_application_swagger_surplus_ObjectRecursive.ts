import typia from "typia";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectRecursive =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectRecursive",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectRecursive.IDepartment",
      },
    ],
    components: {
      schemas: {
        "ObjectRecursive.IDepartment": {
          type: "object",
          properties: {
            parent: {
              $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            sequence: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["parent", "id", "code", "name", "sequence", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ObjectRecursive.IDepartment.Nullable": {
          type: "object",
          properties: {
            parent: {
              $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            sequence: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["parent", "id", "code", "name", "sequence", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ObjectRecursive.ITimestamp": {
          type: "object",
          properties: {
            time: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            zone: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
