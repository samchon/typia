import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_assertParse_CommentTagFormat = (): void =>
  _test_json_assertParse(TypeGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )((input) => typia.json.assertParse<CommentTagFormat>(input));
