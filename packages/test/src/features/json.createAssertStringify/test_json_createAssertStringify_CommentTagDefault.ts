import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createAssertStringify_CommentTagDefault =
  _test_json_assertStringify("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.json.createAssertStringify<CommentTagDefault>());
