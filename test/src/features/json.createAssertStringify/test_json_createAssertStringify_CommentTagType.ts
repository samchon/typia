import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_CommentTagType =
  _test_json_assertStringify(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(typia.json.createAssertStringify<CommentTagType>());
