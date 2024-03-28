import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createAssertParse_CommentTagFormat =
  _test_json_assertParse(TypeGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.json.createAssertParse<CommentTagFormat>());
