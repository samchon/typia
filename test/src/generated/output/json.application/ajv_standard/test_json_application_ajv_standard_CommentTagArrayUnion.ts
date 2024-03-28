import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../../structures/CommentTagArrayUnion";

export const test_json_application_ajv_standard_CommentTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagArrayUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArrayUnion",
      },
    ],
    components: {
      schemas: {
        CommentTagArrayUnion: {
          $id: "#/components/schemas/CommentTagArrayUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/CommentTagArrayUnion.Type",
          },
        },
        "CommentTagArrayUnion.Type": {
          $id: "#/components/schemas/CommentTagArrayUnion.Type",
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
              maxItems: 7,
              minItems: 3,
            },
          },
          required: ["items", "minItems", "maxItems", "both"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
