import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_assertParse_CommentTagLength = (): void =>
  _test_json_assertParse(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) => typia.json.assertParse<CommentTagLength>(input));
