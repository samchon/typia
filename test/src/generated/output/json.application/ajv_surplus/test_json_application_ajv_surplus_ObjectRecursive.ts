import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";

export const test_json_application_ajv_surplus_ObjectRecursive =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ObjectRecursive.IDepartment",
          type: "object",
          properties: {
            parent: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectRecursive.IDepartment",
                },
              ],
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
          required: ["parent", "id", "code", "name", "sequence", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ObjectRecursive.ITimestamp": {
          $id: "#/components/schemas/ObjectRecursive.ITimestamp",
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
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
