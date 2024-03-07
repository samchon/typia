import typia from "typia";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectGenericArray =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
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
          nullable: false,
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
          nullable: false,
          required: ["name", "age"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
