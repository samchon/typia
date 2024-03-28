import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_swagger_surplus_ObjectAlias =
  _test_json_application({
    purpose: "swagger",
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
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectAlias.IMember",
          },
        },
        "ObjectAlias.IMember": {
          type: "object",
          properties: {
            id: {
              type: "string",
              nullable: true,
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
                  type: "number",
                  enum: [1, 2],
                  nullable: true,
                },
                {
                  type: "string",
                  enum: ["female", "male"],
                  nullable: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            age: {
              type: "number",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            dead: {
              type: "boolean",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "email", "name", "sex", "age", "dead"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
