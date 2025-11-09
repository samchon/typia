import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagLength = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.assertEquals<CommentTagLength>(input, (p) => new CustomGuardError(p)));
