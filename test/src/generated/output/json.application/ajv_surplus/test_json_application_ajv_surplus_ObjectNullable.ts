import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_ajv_surplus_ObjectNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectNullable",
      },
    ],
    components: {
      schemas: {
        ObjectNullable: {
          $id: "#/components/schemas/ObjectNullable",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IProduct": {
          $id: "#/components/schemas/ObjectNullable.IProduct",
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            manufacturer: {
              $ref: "#/components/schemas/ObjectNullable.IManufacturer",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            brand: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IBrand",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            similar: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IBrand",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IManufacturer",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["name", "manufacturer", "brand", "similar"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IManufacturer": {
          $id: "#/components/schemas/ObjectNullable.IManufacturer",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["manufacturer"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["type", "name"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IBrand": {
          $id: "#/components/schemas/ObjectNullable.IBrand",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["brand"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["type", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
