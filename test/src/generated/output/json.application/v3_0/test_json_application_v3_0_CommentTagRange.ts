import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagRange } from "../../../../structures/CommentTagRange";

export const test_json_application_v3_0_CommentTagRange =
  _test_json_application({
    version: "3.0",
    name: "CommentTagRange",
  })({
    version: "3.0",
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
              type: "number",
              exclusiveMinimum: true,
              minimum: 3,
            },
            greater_equal: {
              type: "number",
              minimum: 3,
            },
            less: {
              type: "number",
              exclusiveMaximum: true,
              maximum: 7,
            },
            less_equal: {
              type: "number",
              maximum: 7,
            },
            greater_less: {
              type: "number",
              exclusiveMinimum: true,
              minimum: 3,
              exclusiveMaximum: true,
              maximum: 7,
            },
            greater_equal_less: {
              type: "number",
              minimum: 3,
              exclusiveMaximum: true,
              maximum: 7,
            },
            greater_less_equal: {
              type: "number",
              exclusiveMinimum: true,
              minimum: 3,
              maximum: 7,
            },
            greater_equal_less_equal: {
              type: "number",
              minimum: 3,
              maximum: 7,
            },
            equal: {
              type: "number",
              minimum: 10,
              maximum: 10,
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
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagRange",
      },
    ],
  });
