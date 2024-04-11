import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";

export const test_json_application_v3_0_ObjectRecursive =
  _test_json_application({
    version: "3.0",
    name: "ObjectRecursive",
  })({
    version: "3.0",
    components: {
      schemas: {
        "ObjectRecursive.IDepartment": {
          type: "object",
          properties: {
            parent: {
              $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
            },
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
            created_at: {
              $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
            },
          },
          nullable: false,
          required: ["parent", "id", "code", "name", "sequence", "created_at"],
        },
        "ObjectRecursive.IDepartment.Nullable": {
          type: "object",
          properties: {
            parent: {
              $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
            },
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
            created_at: {
              $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
            },
          },
          nullable: true,
          required: ["parent", "id", "code", "name", "sequence", "created_at"],
        },
        "ObjectRecursive.ITimestamp": {
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
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectRecursive.IDepartment",
      },
    ],
  });
