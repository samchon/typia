import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_isStringify_CommentTagDefault = (): void =>
  _test_json_isStringify("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) => typia.json.isStringify<CommentTagDefault>(input));
