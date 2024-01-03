import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_ajv_standard_ObjectAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
            },
            email: {
              type: "string",
            },
            name: {
              type: "string",
            },
            sex: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                  enum: [2, 1],
                },
                {
                  type: "string",
                  enum: ["male", "female"],
                },
              ],
            },
            age: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            dead: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
            },
          },
          required: ["id", "email", "name", "sex", "age", "dead"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
