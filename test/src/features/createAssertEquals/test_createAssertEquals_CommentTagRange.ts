import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_CommentTagRange = (): void => _test_assertEquals(TypeGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createAssertEquals<CommentTagRange>());
