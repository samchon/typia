import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_json_application_ajv_ObjectGenericArray =
  _test_json_application("ajv")("ObjectGenericArray")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGenericArray.IPerson",
              },
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            limit: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            total_count: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            total_pages: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            age: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          required: ["name", "age"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
