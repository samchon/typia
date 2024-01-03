import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../../structures/TypeTagCustom";

export const test_json_application_ajv_surplus_TypeTagCustom =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagCustom",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagCustom",
      },
    ],
    components: {
      schemas: {
        TypeTagCustom: {
          $id: "#/components/schemas/TypeTagCustom",
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"uuid">',
                  kind: "format",
                  value: "uuid",
                  validate:
                    "/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)",
                  exclusive: ["format", "pattern"],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            dollar: {
              type: "string",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "Dollar",
                  kind: "dollar",
                  validate:
                    '$input[0] === "$" && !isNaN(Number($input.substring(1).split(",").join("")))',
                  exclusive: false,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            postfix: {
              type: "string",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Postfix<"abcd">',
                  kind: "postfix",
                  value: "abcd",
                  validate: '$input.endsWith("abcd")',
                  exclusive: false,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            powerOf: {
              type: "number",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: "PowerOf<2>",
                  kind: "powerOf",
                  value: 2,
                  validate:
                    "(() => {\n        const denominator: number = Math.log(2);\n        const value: number = Math.log($input) / denominator;\n        return Math.abs(value - Math.round(value)) < 0.00000001;\n    })()",
                  exclusive: false,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "dollar", "postfix", "powerOf"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
