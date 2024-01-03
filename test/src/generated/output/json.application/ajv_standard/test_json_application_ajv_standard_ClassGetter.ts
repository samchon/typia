import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_ajv_standard_ClassGetter =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ClassGetter",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ClassGetter.Person",
      },
    ],
    components: {
      schemas: {
        "ClassGetter.Person": {
          $id: "#/components/schemas/ClassGetter.Person",
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
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
          required: ["id", "name", "dead"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
