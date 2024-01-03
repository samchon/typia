import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";

export const test_json_application_swagger_standard_ArrayHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
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
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayHierarchical.ICompany",
          },
        },
        "ArrayHierarchical.ICompany": {
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
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
            },
            departments: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
              },
            },
          },
          nullable: false,
          required: ["id", "serial", "name", "established_at", "departments"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.ITimestamp": {
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
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.IDepartment": {
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
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
            },
            employees: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
              },
            },
          },
          nullable: false,
          required: ["id", "code", "sales", "created_at", "employees"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.IEmployee": {
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
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
            },
          },
          nullable: false,
          required: ["id", "name", "age", "grade", "employeed_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
