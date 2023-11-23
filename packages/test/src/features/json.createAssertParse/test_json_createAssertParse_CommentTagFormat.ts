import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createAssertParse_CommentTagFormat =
  _test_json_assertParse("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.json.createAssertParse<CommentTagFormat>());
