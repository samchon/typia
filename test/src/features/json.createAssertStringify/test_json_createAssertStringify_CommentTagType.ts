import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createAssertStringify_CommentTagType = (): void =>
  _test_json_assertStringify(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(typia.json.createAssertStringify<CommentTagType>());
