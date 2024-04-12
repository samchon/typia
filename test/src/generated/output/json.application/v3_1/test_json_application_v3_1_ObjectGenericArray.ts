import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_json_application_v3_1_ObjectGenericArray =
  _test_json_application({
    version: "3.1",
    name: "ObjectGenericArray",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectGenericArray: {
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
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGenericArray",
      },
    ],
  });
