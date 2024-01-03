import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_json_application_ajv_standard_ObjectGenericArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGenericArray",
      },
    ],
    components: {
      schemas: {
        ObjectGenericArray: {
          $id: "#/components/schemas/ObjectGenericArray",
          type: "object",
          properties: {
            pagination: {
              $ref: "#/components/schemas/ObjectGenericArray.IPagination",
            },
            data: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGenericArray.IPerson",
              },
            },
          },
          required: ["pagination", "data"],
        },
        "ObjectGenericArray.IPagination": {
          $id: "#/components/schemas/ObjectGenericArray.IPagination",
          type: "object",
          properties: {
            page: {
              type: "number",
            },
            limit: {
              type: "number",
            },
            total_count: {
              type: "number",
            },
            total_pages: {
              type: "number",
            },
          },
          required: ["page", "limit", "total_count", "total_pages"],
        },
        "ObjectGenericArray.IPerson": {
          $id: "#/components/schemas/ObjectGenericArray.IPerson",
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
          },
          required: ["name", "age"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
