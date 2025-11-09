import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_CommentTagDefault = (): void => _test_assertEquals(TypeGuardError)(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.createAssertEquals<CommentTagDefault>());
