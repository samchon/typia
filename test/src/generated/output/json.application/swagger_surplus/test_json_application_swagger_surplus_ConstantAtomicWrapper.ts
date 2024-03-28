import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_json_application_swagger_surplus_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "swagger",
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ConstantAtomicWrapper.IPointernumber": {
          type: "object",
          properties: {
            value: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ConstantAtomicWrapper.IPointerstring": {
          type: "object",
          properties: {
            value: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
