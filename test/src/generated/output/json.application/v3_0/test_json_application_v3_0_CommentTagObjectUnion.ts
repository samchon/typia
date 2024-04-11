import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../../structures/CommentTagObjectUnion";

export const test_json_application_v3_0_CommentTagObjectUnion =
  _test_json_application({
    version: "3.0",
    name: "CommentTagObjectUnion",
  })({
    version: "3.0",
    components: {
      schemas: {
        CommentTagObjectUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagObjectUnion.Type",
          },
        },
        "CommentTagObjectUnion.Type": {
          oneOf: [
            {
              $ref: "#/components/schemas/CommentTagObjectUnion.Numeric",
            },
            {
              $ref: "#/components/schemas/CommentTagObjectUnion.Literal",
            },
          ],
        },
        "CommentTagObjectUnion.Numeric": {
          type: "object",
          properties: {
            value: {
              type: "number",
              minimum: 3,
            },
          },
          nullable: false,
          required: ["value"],
        },
        "CommentTagObjectUnion.Literal": {
          type: "object",
          properties: {
            value: {
              type: "string",
              minLength: 3,
              maxLength: 7,
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagObjectUnion",
      },
    ],
  });
