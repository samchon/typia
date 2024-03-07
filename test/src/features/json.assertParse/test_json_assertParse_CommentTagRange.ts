import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_json_assertParse_CommentTagRange = _test_json_assertParse(
  TypeGuardError,
)("CommentTagRange")<CommentTagRange>(CommentTagRange)((input) =>
  typia.json.assertParse<CommentTagRange>(input),
);
