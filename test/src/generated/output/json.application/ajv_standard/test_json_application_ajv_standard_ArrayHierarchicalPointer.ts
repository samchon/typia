import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../../structures/ArrayHierarchicalPointer";

export const test_json_application_ajv_standard_ArrayHierarchicalPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
          },
          required: ["value"],
        },
        "ArrayHierarchicalPointer.ICompany": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.ICompany",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            serial: {
              type: "number",
            },
            name: {
              type: "string",
            },
            established_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
            departments: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IDepartment",
              },
            },
          },
          required: ["id", "serial", "name", "established_at", "departments"],
        },
        "ArrayHierarchicalPointer.ITimestamp": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
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
        "ArrayHierarchicalPointer.IDepartment": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.IDepartment",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            code: {
              type: "string",
            },
            sales: {
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
            employees: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IEmployee",
              },
            },
          },
          required: ["id", "code", "sales", "created_at", "employees"],
        },
        "ArrayHierarchicalPointer.IEmployee": {
          $id: "#/components/schemas/ArrayHierarchicalPointer.IEmployee",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
            grade: {
              type: "number",
            },
            employeed_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
          },
          required: ["id", "name", "age", "grade", "employeed_at"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
