import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagObjectUnion = _test_assert(CustomGuardError)(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.assert<CommentTagObjectUnion>(input, (p) => new CustomGuardError(p)));
