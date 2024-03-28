import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_json_application_ajv_surplus_ObjectGenericArray =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            data: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGenericArray.IPerson",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["pagination", "data"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGenericArray.IPagination": {
          $id: "#/components/schemas/ObjectGenericArray.IPagination",
          type: "object",
          properties: {
            page: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            limit: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            total_count: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            total_pages: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["page", "limit", "total_count", "total_pages"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGenericArray.IPerson": {
          $id: "#/components/schemas/ObjectGenericArray.IPerson",
          type: "object",
          properties: {
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
          },
          required: ["name", "age"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
