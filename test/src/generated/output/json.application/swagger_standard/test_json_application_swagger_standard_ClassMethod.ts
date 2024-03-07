import typia from "typia";
import { ClassMethod } from "../../../../structures/ClassMethod";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ClassMethod =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
          },
          nullable: false,
          required: ["name", "age"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
