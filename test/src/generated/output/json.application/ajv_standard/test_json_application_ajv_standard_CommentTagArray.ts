import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArray } from "../../../../structures/CommentTagArray";

export const test_json_application_ajv_standard_CommentTagArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArray",
      },
    ],
    components: {
      schemas: {
        CommentTagArray: {
          $id: "#/components/schemas/CommentTagArray",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagArray.Type",
              },
            },
          },
          required: ["value"],
        },
        "CommentTagArray.Type": {
          $id: "#/components/schemas/CommentTagArray.Type",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "string",
              },
              maxItems: 3,
              minItems: 3,
            },
            minItems: {
              type: "array",
              items: {
                type: "number",
              },
              minItems: 3,
            },
            both: {
              type: "array",
              items: {
                type: "string",
              },
              maxItems: 7,
              minItems: 3,
            },
            equal: {
              type: "array",
              items: {
                type: "number",
              },
              maxItems: 10,
              minItems: 10,
            },
          },
          required: ["items", "minItems", "both", "equal"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
