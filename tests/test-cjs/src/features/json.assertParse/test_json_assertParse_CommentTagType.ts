import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_assertParse_CommentTagType = (): void =>
  _test_json_assertParse(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) => typia.json.assertParse<CommentTagType>(input));
