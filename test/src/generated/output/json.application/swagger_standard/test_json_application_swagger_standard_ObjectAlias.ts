import typia from "typia";
import { ObjectAlias } from "../../../../structures/ObjectAlias";
import { _test_json_application } from "../../../../internal/_test_json_application";
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
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
