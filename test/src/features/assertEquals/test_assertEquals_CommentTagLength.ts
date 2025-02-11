import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_assertEquals_CommentTagLength = _test_assertEquals(TypeGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.assertEquals<CommentTagLength>(input));
