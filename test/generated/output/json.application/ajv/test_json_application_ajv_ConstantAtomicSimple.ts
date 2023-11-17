import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";

export const test_json_application_ajv_ConstantAtomicSimple =
  _test_json_application("ajv")("ConstantAtomicSimple")({
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
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
              enum: [false],
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
              enum: [true],
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
              enum: [2],
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["three"],
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
      },
    },
    purpose: "ajv",
  });
