import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagArray = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.assertEquals<CommentTagArray>(input, (p) => new CustomGuardError(p)));
