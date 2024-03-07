import typia from "typia";
import { ClassMethod } from "../../../../structures/ClassMethod";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ClassMethod =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ClassMethod",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ClassMethod.Animal",
      },
    ],
    components: {
      schemas: {
        "ClassMethod.Animal": {
          $id: "#/components/schemas/ClassMethod.Animal",
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            age: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["name", "age"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
