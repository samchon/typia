import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagInfinite = (): void => _test_assert(CustomGuardError)(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.createAssert<CommentTagInfinite>((p) => new CustomGuardError(p)));
