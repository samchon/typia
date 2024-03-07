import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectHttpCommentTag = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpCommentTag")<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  typia.assertGuard<ObjectHttpCommentTag>(input),
);
