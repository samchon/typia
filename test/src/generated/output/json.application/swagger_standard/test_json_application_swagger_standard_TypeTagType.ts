import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagType } from "../../../../structures/TypeTagType";

export const test_json_application_swagger_standard_TypeTagType =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagType.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
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
          nullable: false,
          required: [
            "int",
            "uint",
            "int32",
            "uint32",
            "int64",
            "uint64",
            "float",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
