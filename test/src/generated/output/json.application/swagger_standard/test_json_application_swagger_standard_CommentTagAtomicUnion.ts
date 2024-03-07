import typia from "typia";
import { CommentTagAtomicUnion } from "../../../../structures/CommentTagAtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_CommentTagAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "CommentTagAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagAtomicUnion",
      },
    ],
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
                  maxLength: 7,
                  minLength: 3,
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
    purpose: "swagger",
    surplus: false,
  });
