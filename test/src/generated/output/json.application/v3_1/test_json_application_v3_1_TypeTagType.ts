import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagType } from "../../../../structures/TypeTagType";

export const test_json_application_v3_1_TypeTagType = _test_json_application({
  version: "3.1",
  name: "TypeTagType",
})({
  version: "3.1",
  components: {
    schemas: {
      TypeTagType: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TypeTagType.Type",
            },
          },
        },
        required: ["value"],
      },
      "TypeTagType.Type": {
        type: "object",
        properties: {
          int: {
            type: "integer",
          },
          uint: {
            type: "integer",
          },
          int32: {
            type: "integer",
          },
          uint32: {
            type: "integer",
          },
          int64: {
            type: "integer",
          },
          uint64: {
            type: "integer",
          },
          float: {
            type: "number",
          },
        },
        required: [
          "int",
          "uint",
          "int32",
          "uint32",
          "int64",
          "uint64",
          "float",
        ],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagType",
    },
  ],
});
