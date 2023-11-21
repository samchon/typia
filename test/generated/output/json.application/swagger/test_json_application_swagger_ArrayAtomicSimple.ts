import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";

export const test_json_application_swagger_ArrayAtomicSimple =
  _test_json_application("swagger")("ArrayAtomicSimple")({
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
    },
    purpose: "swagger",
  });
