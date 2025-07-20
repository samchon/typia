import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_validateParse_CommentTagDefault = (): void =>
  _test_json_validateParse("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) => typia.json.validateParse<CommentTagDefault>(input));
