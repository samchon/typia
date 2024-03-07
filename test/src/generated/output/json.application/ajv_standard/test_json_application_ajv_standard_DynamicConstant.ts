import typia from "typia";
import { DynamicConstant } from "../../../../structures/DynamicConstant";
import { _test_json_application } from "../../../../internal/_test_json_application";
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
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
