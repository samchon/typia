import typia from "typia";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ArrayHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayHierarchical",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayHierarchical",
      },
    ],
    components: {
      schemas: {
        ArrayHierarchical: {
          $id: "#/components/schemas/ArrayHierarchical",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayHierarchical.ICompany",
          },
        },
        "ArrayHierarchical.ICompany": {
          $id: "#/components/schemas/ArrayHierarchical.ICompany",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            serial: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            established_at: {
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            departments: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "serial", "name", "established_at", "departments"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.ITimestamp": {
          $id: "#/components/schemas/ArrayHierarchical.ITimestamp",
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
        "ArrayHierarchical.IDepartment": {
          $id: "#/components/schemas/ArrayHierarchical.IDepartment",
          type: "object",
          properties: {
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
            sales: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            employees: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "code", "sales", "created_at", "employees"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.IEmployee": {
          $id: "#/components/schemas/ArrayHierarchical.IEmployee",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            age: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            grade: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            employeed_at: {
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "age", "grade", "employeed_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
