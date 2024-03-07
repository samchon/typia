import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_json_assertParse_CommentTagType = _test_json_assertParse(
  TypeGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)((input) =>
  typia.json.assertParse<CommentTagType>(input),
);
