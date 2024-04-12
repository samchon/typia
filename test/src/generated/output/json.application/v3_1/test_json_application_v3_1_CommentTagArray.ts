import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArray } from "../../../../structures/CommentTagArray";

export const test_json_application_v3_1_CommentTagArray =
  _test_json_application({
    version: "3.1",
    name: "CommentTagArray",
  })({
    version: "3.1",
    components: {
      schemas: {
        CommentTagArray: {
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
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "string",
              },
              minItems: 3,
              maxItems: 3,
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
              minItems: 3,
              maxItems: 7,
            },
            equal: {
              type: "array",
              items: {
                type: "number",
              },
              minItems: 10,
              maxItems: 10,
            },
          },
          required: ["items", "minItems", "both", "equal"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArray",
      },
    ],
  });
