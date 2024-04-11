import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagAtomicUnion } from "../../../../structures/CommentTagAtomicUnion";

export const test_json_application_v3_1_CommentTagAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "CommentTagAtomicUnion",
  })({
    version: "3.1",
    components: {
      schemas: {
        CommentTagAtomicUnion: {
          $ref: "#/components/schemas/CommentTagAtomicUnion",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagAtomicUnion",
      },
    ],
  });
