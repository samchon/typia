import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagLength } from "../../../../structures/CommentTagLength";

export const test_json_application_ajv_standard_CommentTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagLength",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagLength",
      },
    ],
    components: {
      schemas: {
        CommentTagLength: {
          $id: "#/components/schemas/CommentTagLength",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagLength.Type",
              },
            },
          },
          required: ["value"],
        },
        "CommentTagLength.Type": {
          $id: "#/components/schemas/CommentTagLength.Type",
          type: "object",
          properties: {
            fixed: {
              type: "string",
              maxLength: 5,
              minLength: 5,
            },
            minimum: {
              type: "string",
              minLength: 3,
            },
            maximum: {
              type: "string",
              maxLength: 7,
            },
            minimum_and_maximum: {
              type: "string",
              maxLength: 7,
              minLength: 3,
            },
            equal: {
              type: "string",
              maxLength: 19,
              minLength: 10,
            },
          },
          required: [
            "fixed",
            "minimum",
            "maximum",
            "minimum_and_maximum",
            "equal",
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
