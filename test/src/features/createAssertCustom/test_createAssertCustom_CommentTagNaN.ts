import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagNaN = _test_assert(CustomGuardError)(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)(typia.createAssert<CommentTagNaN>((p) => new CustomGuardError(p)));
