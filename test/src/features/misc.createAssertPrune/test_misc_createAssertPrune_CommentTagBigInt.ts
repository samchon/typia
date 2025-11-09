import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_CommentTagBigInt = (): void => _test_misc_assertPrune(TypeGuardError)(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)(typia.misc.createAssertPrune<CommentTagBigInt>());
