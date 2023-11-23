import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_assertStringify_CommentTagDefault =
  _test_json_assertStringify("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) => typia.json.assertStringify<CommentTagDefault>(input));
