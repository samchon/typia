import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagInfinite = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.createAssertEquals<CommentTagInfinite>((p) => new CustomGuardError(p)));
