import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_isParse_CommentTagPattern = _test_json_isParse(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.json.isParse<CommentTagPattern>(input),
);
