import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_json_application_v3_1_ConstantAtomicWrapper =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicWrapper",
  })({
    version: "3.1",
    components: {
      schemas: {
        ConstantAtomicWrapper: {
          type: "array",
          prefixItems: [
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
          additionalItems: {
            $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
          },
        },
        "ConstantAtomicWrapper.IPointerboolean": {
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
          },
          required: ["value"],
        },
        "ConstantAtomicWrapper.IPointernumber": {
          type: "object",
          properties: {
            value: {
              type: "number",
            },
          },
          required: ["value"],
        },
        "ConstantAtomicWrapper.IPointerstring": {
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
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicWrapper",
      },
    ],
  });
