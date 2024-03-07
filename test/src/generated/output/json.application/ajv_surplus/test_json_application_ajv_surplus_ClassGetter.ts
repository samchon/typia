import typia from "typia";
import { ClassGetter } from "../../../../structures/ClassGetter";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ClassGetter =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
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
          required: ["id", "name", "dead"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
