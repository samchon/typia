import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassMethod } from "../../../../structures/ClassMethod";

export const test_json_application_ajv_standard_ClassMethod =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            age: {
              type: "number",
            },
          },
          required: ["name", "age"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
