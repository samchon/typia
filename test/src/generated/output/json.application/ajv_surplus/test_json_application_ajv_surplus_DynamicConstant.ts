import typia from "typia";
import { DynamicConstant } from "../../../../structures/DynamicConstant";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_DynamicConstant =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                b: {
                  type: "number",
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                c: {
                  type: "number",
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                d: {
                  type: "number",
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              },
              required: ["a", "b", "c", "d"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
