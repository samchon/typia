import typia from "typia";
import { TypeTagType } from "../../../../structures/TypeTagType";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_TypeTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagType",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagType",
      },
    ],
    components: {
      schemas: {
        TypeTagType: {
          $id: "#/components/schemas/TypeTagType",
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
          $id: "#/components/schemas/TypeTagType.Type",
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
    purpose: "ajv",
    surplus: false,
  });
