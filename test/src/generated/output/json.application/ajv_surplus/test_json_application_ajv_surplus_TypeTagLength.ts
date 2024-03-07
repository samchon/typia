import typia from "typia";
import { TypeTagLength } from "../../../../structures/TypeTagLength";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_TypeTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagLength",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagLength",
      },
    ],
    components: {
      schemas: {
        TypeTagLength: {
          $id: "#/components/schemas/TypeTagLength",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagLength.Type",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagLength.Type": {
          $id: "#/components/schemas/TypeTagLength.Type",
          type: "object",
          properties: {
            fixed: {
              type: "string",
              maxLength: 5,
              minLength: 5,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<5>",
                  kind: "minLength",
                  value: 5,
                  validate: "5 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "string",
                  name: "MaxLength<5>",
                  kind: "maxLength",
                  value: 5,
                  validate: "$input.length <= 5",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minimum: {
              type: "string",
              minLength: 3,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<3>",
                  kind: "minLength",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            maximum: {
              type: "string",
              maxLength: 7,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MaxLength<7>",
                  kind: "maxLength",
                  value: 7,
                  validate: "$input.length <= 7",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minimum_and_maximum: {
              type: "string",
              maxLength: 7,
              minLength: 3,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<3>",
                  kind: "minLength",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "string",
                  name: "MaxLength<7>",
                  kind: "maxLength",
                  value: 7,
                  validate: "$input.length <= 7",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            equal: {
              type: "string",
              maxLength: 19,
              minLength: 10,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<10>",
                  kind: "minLength",
                  value: 10,
                  validate: "10 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "string",
                  name: "MaxLength<19>",
                  kind: "maxLength",
                  value: 19,
                  validate: "$input.length <= 19",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: [
            "fixed",
            "minimum",
            "maximum",
            "minimum_and_maximum",
            "equal",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
