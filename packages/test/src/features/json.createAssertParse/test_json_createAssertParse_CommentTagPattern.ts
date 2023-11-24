import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createAssertParse_CommentTagPattern =
  _test_json_assertParse("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.json.createAssertParse<CommentTagPattern>());
