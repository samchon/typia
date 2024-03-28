import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../../structures/ArrayHierarchicalPointer";

export const test_json_application_ajv_surplus_ArrayHierarchicalPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayHierarchicalPointer",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayHierarchicalPointer",
      },
    ],
    components: {
      schemas: {
        ArrayHierarchicalPointer: {
          $id: "#/components/schemas/ArrayHierarchicalPointer",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.ICompany",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.ICompany": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.ICompany",
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
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            departments: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IDepartment",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "serial", "name", "established_at", "departments"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.ITimestamp": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
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
        "ArrayHierarchicalPointer.IDepartment": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.IDepartment",
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
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            employees: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IEmployee",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "code", "sales", "created_at", "employees"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.IEmployee": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.IEmployee",
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
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
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
