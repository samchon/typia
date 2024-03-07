import typia from "typia";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ConstantAtomicWrapper",
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
        "ConstantAtomicWrapper.IPointerboolean": {
          $id: "#/components/schemas/ConstantAtomicWrapper.IPointerboolean",
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
          },
          required: ["value"],
        },
        "ConstantAtomicWrapper.IPointernumber": {
          $id: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
          type: "object",
          properties: {
            value: {
              type: "number",
            },
          },
          required: ["value"],
        },
        "ConstantAtomicWrapper.IPointerstring": {
          $id: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
