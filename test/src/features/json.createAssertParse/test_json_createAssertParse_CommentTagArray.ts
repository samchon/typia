import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createAssertParse_CommentTagArray = (): void =>
  _test_json_assertParse(TypeGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(typia.json.createAssertParse<CommentTagArray>());
