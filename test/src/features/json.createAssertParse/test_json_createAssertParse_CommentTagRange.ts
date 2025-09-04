import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createAssertParse_CommentTagRange = (): void =>
  _test_json_assertParse(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.json.createAssertParse<CommentTagRange>());
