import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagNaN = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)(typia.createAssertEquals<CommentTagNaN>((p) => new CustomGuardError(p)));
