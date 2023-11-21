import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_json_application_ajv_ConstantAtomicWrapper =
  _test_json_application("ajv")("ConstantAtomicWrapper")({
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
            },
            {
              $ref: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
            },
            {
              $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ConstantAtomicWrapper.IPointernumber": {
          $id: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ConstantAtomicWrapper.IPointerstring": {
          $id: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
