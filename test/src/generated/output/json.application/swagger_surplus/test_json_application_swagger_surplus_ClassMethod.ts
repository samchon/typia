import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassMethod } from "../../../../structures/ClassMethod";

export const test_json_application_swagger_surplus_ClassMethod =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["name", "age"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
