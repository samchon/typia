import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_isParse_CommentTagFormat = _test_json_isParse(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.json.isParse<CommentTagFormat>(input),
);
