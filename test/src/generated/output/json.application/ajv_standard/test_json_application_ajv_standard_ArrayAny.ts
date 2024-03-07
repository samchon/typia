import typia from "typia";
import { ArrayAny } from "../../../../structures/ArrayAny";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ArrayAny =
  _test_json_application({ purpose: "ajv", surplus: false, name: "ArrayAny" })({
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
            },
            undefindable1: {
              type: "array",
              items: {},
            },
            undefindable2: {
              type: "array",
              items: {},
            },
            nullables1: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
            },
            nullables2: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
            },
            both1: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
            },
            both2: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
            },
            both3: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "array",
                  items: {},
                },
              ],
            },
            union: {
              type: "array",
              items: {},
            },
          },
          required: ["anys", "nullables1", "nullables2", "union"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
