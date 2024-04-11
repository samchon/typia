import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../../structures/ArrayHierarchicalPointer";

export const test_json_application_v3_0_ArrayHierarchicalPointer =
  _test_json_application({
    version: "3.0",
    name: "ArrayHierarchicalPointer",
  })({
    version: "3.0",
    components: {
      schemas: {
        ArrayHierarchicalPointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.ICompany",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ArrayHierarchicalPointer.ICompany": {
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
          nullable: false,
          required: ["id", "serial", "name", "established_at", "departments"],
        },
        "ArrayHierarchicalPointer.ITimestamp": {
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
        "ArrayHierarchicalPointer.IDepartment": {
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
          nullable: false,
          required: ["id", "code", "sales", "created_at", "employees"],
        },
        "ArrayHierarchicalPointer.IEmployee": {
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
          nullable: false,
          required: ["id", "name", "age", "grade", "employeed_at"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayHierarchicalPointer",
      },
    ],
  });
