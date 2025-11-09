import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_CommentTagArray = (): void => _test_assertEquals(TypeGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createAssertEquals<CommentTagArray>());
