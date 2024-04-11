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
          $ref: "#/components/schemas/CommentTagArray",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagArray",
      },
    ],
  });
