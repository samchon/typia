import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_isStringify_CommentTagPattern = (): void =>
  _test_json_isStringify("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.json.isStringify<CommentTagPattern>(input));
