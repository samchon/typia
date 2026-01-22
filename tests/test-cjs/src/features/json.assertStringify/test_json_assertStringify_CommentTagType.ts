import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_assertStringify_CommentTagType = (): void =>
  _test_json_assertStringify(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) => typia.json.assertStringify<CommentTagType>(input));
