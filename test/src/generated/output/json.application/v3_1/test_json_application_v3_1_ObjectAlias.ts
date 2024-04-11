import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_v3_1_ObjectAlias = _test_json_application({
  version: "3.1",
  name: "ObjectAlias",
})({
  version: "3.1",
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
                const: 1,
              },
              {
                const: 2,
              },
              {
                const: "male",
              },
              {
                const: "female",
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
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectAlias",
    },
  ],
});
