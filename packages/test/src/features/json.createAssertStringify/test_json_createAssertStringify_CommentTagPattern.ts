import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createAssertStringify_CommentTagPattern =
  _test_json_assertStringify("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.json.createAssertStringify<CommentTagPattern>());
