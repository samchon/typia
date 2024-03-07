import typia from "typia";
import { CommentTagRange } from "../../../../structures/CommentTagRange";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_CommentTagRange =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "CommentTagRange",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagRange",
      },
    ],
    components: {
      schemas: {
        CommentTagRange: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagRange.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "CommentTagRange.Type": {
          type: "object",
          properties: {
            greater: {
              type: "integer",
              minimum: 3,
              exclusiveMinimum: true,
            },
            greater_equal: {
              type: "integer",
              minimum: 3,
            },
            less: {
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
            },
            less_equal: {
              type: "integer",
              maximum: 7,
            },
            greater_less: {
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              minimum: 3,
              exclusiveMinimum: true,
            },
            greater_equal_less: {
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              minimum: 3,
            },
            greater_less_equal: {
              type: "integer",
              minimum: 3,
              exclusiveMinimum: true,
              maximum: 7,
            },
            greater_equal_less_equal: {
              type: "integer",
              maximum: 7,
              minimum: 3,
            },
            equal: {
              type: "integer",
              maximum: 10,
              minimum: 10,
            },
          },
          nullable: false,
          required: [
            "greater",
            "greater_equal",
            "less",
            "less_equal",
            "greater_less",
            "greater_equal_less",
            "greater_less_equal",
            "greater_equal_less_equal",
            "equal",
          ],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
