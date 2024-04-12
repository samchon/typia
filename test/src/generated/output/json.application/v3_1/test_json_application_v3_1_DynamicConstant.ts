import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_json_application_v3_1_DynamicConstant =
  _test_json_application({
    version: "3.1",
    name: "DynamicConstant",
  })({
    version: "3.1",
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
              required: ["a", "b", "c", "d"],
            },
          },
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/DynamicConstant",
      },
    ],
  });
