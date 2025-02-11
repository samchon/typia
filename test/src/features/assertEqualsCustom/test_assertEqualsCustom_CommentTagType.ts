import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagType = _test_assertEquals(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.assertEquals<CommentTagType>(input, (p) => new CustomGuardError(p)));
