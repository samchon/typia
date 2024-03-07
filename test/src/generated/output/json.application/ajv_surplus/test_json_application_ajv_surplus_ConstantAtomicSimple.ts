import typia from "typia";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ConstantAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicSimple",
      },
    ],
    components: {
      schemas: {
        ConstantAtomicSimple: {
          $id: "#/components/schemas/ConstantAtomicSimple",
          type: "array",
          items: [
            {
              type: "boolean",
              enum: [false],
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "boolean",
              enum: [true],
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "number",
              enum: [2],
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "string",
              enum: ["three"],
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
