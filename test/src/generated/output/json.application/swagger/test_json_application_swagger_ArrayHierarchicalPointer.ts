import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../../structures/ArrayHierarchicalPointer";

export const test_json_application_swagger_ArrayHierarchicalPointer =
  _test_json_application("swagger")("ArrayHierarchicalPointer")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayHierarchicalPointer",
      },
    ],
    components: {
      schemas: {
        ArrayHierarchicalPointer: {
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.ICompany",
              },
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.ICompany": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            serial: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            established_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
            departments: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IDepartment",
              },
            },
          },
          nullable: false,
          required: ["id", "serial", "name", "established_at", "departments"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.ITimestamp": {
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
          nullable: false,
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.IDepartment": {
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
            sales: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
            employees: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IEmployee",
              },
            },
          },
          nullable: false,
          required: ["id", "code", "sales", "created_at", "employees"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchicalPointer.IEmployee": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            age: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            grade: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            employeed_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
          },
          nullable: false,
          required: ["id", "name", "age", "grade", "employeed_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
