import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createIsStringify_CommentTagPattern =
  _test_json_isStringify("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.json.createIsStringify<CommentTagPattern>());
