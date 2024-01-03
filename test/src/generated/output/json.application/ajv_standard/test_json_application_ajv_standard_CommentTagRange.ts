import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagRange } from "../../../../structures/CommentTagRange";

export const test_json_application_ajv_standard_CommentTagRange =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/CommentTagRange",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagRange.Type",
              },
            },
          },
          required: ["value"],
        },
        "CommentTagRange.Type": {
          $id: "#/components/schemas/CommentTagRange.Type",
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
    purpose: "ajv",
    surplus: false,
  });
