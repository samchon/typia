import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagLength = _test_assertEquals(CustomGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createAssertEquals<CommentTagLength>((p) => new CustomGuardError(p)));
