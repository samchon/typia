import typia from "typia";
import { CommentTagType } from "../../../../structures/CommentTagType";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_CommentTagType =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagType.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "CommentTagType.Type": {
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
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
