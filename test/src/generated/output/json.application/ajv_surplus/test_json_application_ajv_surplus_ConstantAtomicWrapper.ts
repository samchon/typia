import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_json_application_ajv_surplus_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
