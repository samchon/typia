import typia from "typia";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ArrayAtomicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayAtomicSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAtomicSimple",
      },
    ],
    components: {
      schemas: {
        ArrayAtomicSimple: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "boolean",
                },
              },
              {
                type: "array",
                items: {
                  type: "number",
                },
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                type: "array",
                items: {
                  type: "boolean",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  type: "number",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 3,
            maxItems: 3,
          },
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
