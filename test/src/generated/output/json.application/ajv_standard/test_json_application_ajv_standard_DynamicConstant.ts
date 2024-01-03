import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_json_application_ajv_standard_DynamicConstant =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicConstant",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicConstant",
      },
    ],
    components: {
      schemas: {
        DynamicConstant: {
          $id: "#/components/schemas/DynamicConstant",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                a: {
                  type: "number",
                },
                b: {
                  type: "number",
                },
                c: {
                  type: "number",
                },
                d: {
                  type: "number",
                },
              },
              required: ["a", "b", "c", "d"],
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
