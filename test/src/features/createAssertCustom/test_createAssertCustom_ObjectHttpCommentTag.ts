import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpCommentTag = _test_assert(CustomGuardError)(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.createAssert<ObjectHttpCommentTag>((p) => new CustomGuardError(p)));
