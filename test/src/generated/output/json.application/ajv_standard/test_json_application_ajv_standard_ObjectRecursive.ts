import typia from "typia";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectRecursive.IDepartment",
                },
              ],
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
          required: ["parent", "id", "code", "name", "sequence", "created_at"],
        },
        "ObjectRecursive.ITimestamp": {
          $id: "#/components/schemas/ObjectRecursive.ITimestamp",
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
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
