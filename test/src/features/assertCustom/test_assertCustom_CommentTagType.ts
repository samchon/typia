import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagType = (): void => _test_assert(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.assert<CommentTagType>(input, (p) => new CustomGuardError(p)));
