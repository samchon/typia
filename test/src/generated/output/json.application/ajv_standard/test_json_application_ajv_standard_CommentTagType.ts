import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagType } from "../../../../structures/CommentTagType";

export const test_json_application_ajv_standard_CommentTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagType",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagType",
      },
    ],
    components: {
      schemas: {
        CommentTagType: {
          $id: "#/components/schemas/CommentTagType",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagType.Type",
              },
            },
          },
          required: ["value"],
        },
        "CommentTagType.Type": {
          $id: "#/components/schemas/CommentTagType.Type",
          type: "object",
          properties: {
            int: {
              type: "integer",
              title: "Integer value",
              description: "Integer value.",
            },
            uint: {
              type: "integer",
              title: "Unsigned integer value",
              description: "Unsigned integer value.",
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
