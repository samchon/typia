import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_validateStringify_CommentTagPattern =
  _test_json_validateStringify("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.json.validateStringify<CommentTagPattern>(input));
