import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_v3_0_ObjectAlias = _test_json_application({
  version: "3.0",
  name: "ObjectAlias",
})({
  version: "3.0",
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
                enum: [1, 2],
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
  schemas: [
    {
      $ref: "#/components/schemas/ObjectAlias",
    },
  ],
});
