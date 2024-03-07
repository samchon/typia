import typia from "typia";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ArrayAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
          $id: "#/components/schemas/ArrayAtomicSimple",
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
    purpose: "ajv",
    surplus: false,
  });
