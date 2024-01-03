import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../../structures/CommentTagObjectUnion";

export const test_json_application_ajv_standard_CommentTagObjectUnion =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/CommentTagObjectUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagObjectUnion.Type",
          },
        },
        "CommentTagObjectUnion.Type": {
          $id: "#/components/schemas/CommentTagObjectUnion.Type",
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
          $id: "#/components/schemas/CommentTagObjectUnion.Numeric",
          type: "object",
          properties: {
            value: {
              type: "number",
              minimum: 3,
            },
          },
          required: ["value"],
        },
        "CommentTagObjectUnion.Literal": {
          $id: "#/components/schemas/CommentTagObjectUnion.Literal",
          type: "object",
          properties: {
            value: {
              type: "string",
              maxLength: 7,
              minLength: 3,
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
