import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagRange } from "../../../../structures/CommentTagRange";

export const test_json_application_v3_1_CommentTagRange =
  _test_json_application({
    version: "3.1",
    name: "CommentTagRange",
  })({
    version: "3.1",
    components: {
      schemas: {
        CommentTagRange: {
          $ref: "#/components/schemas/CommentTagRange",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagRange",
      },
    ],
  });
