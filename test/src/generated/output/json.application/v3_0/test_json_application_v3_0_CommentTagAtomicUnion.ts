import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagAtomicUnion } from "../../../../structures/CommentTagAtomicUnion";

export const test_json_application_v3_0_CommentTagAtomicUnion =
  _test_json_application({
    version: "3.0",
    name: "CommentTagAtomicUnion",
  })({
    version: "3.0",
    components: {
      schemas: {
        CommentTagAtomicUnion: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagAtomicUnion.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "CommentTagAtomicUnion.Type": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "string",
                  minLength: 3,
                  maxLength: 7,
                },
                {
                  type: "number",
                  minimum: 3,
                },
              ],
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagAtomicUnion",
      },
    ],
  });
