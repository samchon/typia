import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagArray = _test_assertEquals(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createAssertEquals<CommentTagArray>((p) => new CustomGuardError(p)));
