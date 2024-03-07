import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_CommentTagLength =
  _test_misc_assertClone(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.misc.createAssertClone<CommentTagLength>());
