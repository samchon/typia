import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_createAssertParse_CommentTagLength =
  _test_json_assertParse("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.json.createAssertParse<CommentTagLength>());
