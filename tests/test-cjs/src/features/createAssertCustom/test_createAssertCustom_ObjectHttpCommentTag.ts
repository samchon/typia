import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createAssertCustom_ObjectHttpCommentTag = (): void =>
  _test_assert(CustomGuardError)("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.createAssert<ObjectHttpCommentTag>((p) => new CustomGuardError(p)));
