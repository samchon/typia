import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_json_application_v3_0_ConstantAtomicWrapper =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicWrapper",
  })({
    version: "3.0",
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
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicWrapper",
      },
    ],
  });
