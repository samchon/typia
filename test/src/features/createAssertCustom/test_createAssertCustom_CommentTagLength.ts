import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagLength = _test_assert(CustomGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createAssert<CommentTagLength>((p) => new CustomGuardError(p)));
