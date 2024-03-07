import typia from "typia";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ConstantAtomicSimple =
  _test_json_application({
    purpose: "swagger",
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
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
                enum: [false, true],
              },
              {
                type: "number",
                enum: [2],
              },
              {
                type: "string",
                enum: ["three"],
              },
            ],
          },
          minItems: 4,
          maxItems: 4,
          "x-typia-tuple": {
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
    },
    purpose: "swagger",
    surplus: true,
  });
