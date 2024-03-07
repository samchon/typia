import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_CommentTagRange =
  _test_json_assertParse(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.json.createAssertParse<CommentTagRange>());
