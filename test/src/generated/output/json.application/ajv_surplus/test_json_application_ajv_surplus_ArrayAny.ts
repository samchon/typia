import typia from "typia";
import { ArrayAny } from "../../../../structures/ArrayAny";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ArrayAny =
  _test_json_application({ purpose: "ajv", surplus: true, name: "ArrayAny" })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAny",
      },
    ],
    components: {
      schemas: {
        ArrayAny: {
          $id: "#/components/schemas/ArrayAny",
          type: "object",
          properties: {
            anys: {
              type: "array",
              items: {},
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            undefindable1: {
              type: "array",
              items: {},
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            undefindable2: {
              type: "array",
              items: {},
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            nullables1: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullables2: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            both1: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            both2: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            both3: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            union: {
              type: "array",
              items: {},
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["anys", "nullables1", "nullables2", "union"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
