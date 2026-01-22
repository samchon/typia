import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_validateParse_CommentTagPattern = (): void =>
  _test_json_validateParse("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.json.validateParse<CommentTagPattern>(input));
