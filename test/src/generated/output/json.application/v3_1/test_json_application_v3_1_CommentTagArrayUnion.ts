import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../../structures/CommentTagArrayUnion";

export const test_json_application_v3_1_CommentTagArrayUnion =
  _test_json_application({
    version: "3.1",
    name: "CommentTagArrayUnion",
  })({
    version: "3.1",
    components: {
      schemas: {
        CommentTagArrayUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagArrayUnion.Type",
          },
        },
        "CommentTagArrayUnion.Type": {
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
            maxItems: {
              type: "array",
              items: {
                oneOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "number",
                  },
                ],
              },
              maxItems: 7,
            },
            both: {
              type: "array",
              items: {
                type: "string",
              },
              minItems: 3,
              maxItems: 7,
            },
          },
          required: ["items", "minItems", "maxItems", "both"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArrayUnion",
      },
    ],
  });
