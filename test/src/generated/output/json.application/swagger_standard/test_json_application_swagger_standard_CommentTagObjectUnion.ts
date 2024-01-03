import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../../structures/CommentTagObjectUnion";

export const test_json_application_swagger_standard_CommentTagObjectUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "CommentTagObjectUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagObjectUnion",
      },
    ],
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
              maxLength: 7,
              minLength: 3,
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
