import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_swagger_standard_ObjectAlias =
  _test_json_application({
    purpose: "swagger",
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
                  type: "number",
                  enum: [2, 1],
                  nullable: true,
                },
                {
                  type: "string",
                  enum: ["male", "female"],
                  nullable: true,
                },
              ],
            },
            age: {
              type: "number",
              nullable: true,
            },
            dead: {
              type: "boolean",
              nullable: true,
            },
          },
          nullable: false,
          required: ["id", "email", "name", "sex", "age", "dead"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
