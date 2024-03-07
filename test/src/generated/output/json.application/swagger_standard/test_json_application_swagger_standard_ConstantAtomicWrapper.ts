import typia from "typia";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ConstantAtomicWrapper",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicWrapper",
      },
    ],
    components: {
      schemas: {
        ConstantAtomicWrapper: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerboolean",
              },
              {
                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
              },
              {
                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerboolean",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 3,
            maxItems: 3,
          },
        },
        "ConstantAtomicWrapper.IPointerboolean": {
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ConstantAtomicWrapper.IPointernumber": {
          type: "object",
          properties: {
            value: {
              type: "number",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ConstantAtomicWrapper.IPointerstring": {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
