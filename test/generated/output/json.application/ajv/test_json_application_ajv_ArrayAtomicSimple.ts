import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";

export const test_json_application_ajv_ArrayAtomicSimple =
  _test_json_application("ajv")("ArrayAtomicSimple")({
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
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            },
          ],
          minItems: 3,
          maxItems: 3,
        },
      },
    },
    purpose: "ajv",
  });
