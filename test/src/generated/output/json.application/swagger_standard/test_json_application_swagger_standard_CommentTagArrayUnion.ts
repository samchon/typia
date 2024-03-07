import typia from "typia";
import { CommentTagArrayUnion } from "../../../../structures/CommentTagArrayUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_CommentTagArrayUnion =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["items", "minItems", "maxItems", "both"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
