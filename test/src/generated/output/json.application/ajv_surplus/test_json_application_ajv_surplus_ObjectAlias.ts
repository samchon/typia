import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_ajv_surplus_ObjectAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectAlias",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectAlias",
      },
    ],
    components: {
      schemas: {
        ObjectAlias: {
          $id: "#/components/schemas/ObjectAlias",
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectAlias.IMember",
          },
        },
        "ObjectAlias.IMember": {
          $id: "#/components/schemas/ObjectAlias.IMember",
          type: "object",
          properties: {
            id: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            email: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            sex: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "number",
                  enum: [1, 2],
                },
                {
                  type: "string",
                  enum: ["female", "male"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            age: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            dead: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "email", "name", "sex", "age", "dead"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
