import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../../structures/CommentTagArrayUnion";

export const test_json_application_v3_0_CommentTagArrayUnion =
  _test_json_application({
    version: "3.0",
    name: "CommentTagArrayUnion",
  })({
    version: "3.0",
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
          nullable: false,
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
