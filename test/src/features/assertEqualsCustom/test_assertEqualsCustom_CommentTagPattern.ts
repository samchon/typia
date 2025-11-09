import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagPattern = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.assertEquals<CommentTagPattern>(input, (p) => new CustomGuardError(p)));
