import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_json_application_swagger_surplus_DynamicConstant =
  _test_json_application({
    purpose: "swagger",
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
              nullable: false,
              required: ["a", "b", "c", "d"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
