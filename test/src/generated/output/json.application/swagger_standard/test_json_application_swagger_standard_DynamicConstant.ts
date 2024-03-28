import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_json_application_swagger_standard_DynamicConstant =
  _test_json_application({
    purpose: "swagger",
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
              nullable: false,
              required: ["a", "b", "c", "d"],
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
