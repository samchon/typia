import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_assertEquals_CommentTagTypeBigInt = (): void => _test_assertEquals(TypeGuardError)(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)((input) => typia.assertEquals<CommentTagTypeBigInt>(input));
