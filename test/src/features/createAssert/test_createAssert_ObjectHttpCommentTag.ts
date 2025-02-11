import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createAssert_ObjectHttpCommentTag = _test_assert(
  TypeGuardError,
)("ObjectHttpCommentTag")<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  typia.createAssert<ObjectHttpCommentTag>(),
);
