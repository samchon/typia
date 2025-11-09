import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagTypeBigInt = (): void => _test_misc_assertPrune(CustomGuardError)(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)(typia.misc.createAssertPrune<CommentTagTypeBigInt>((p) => new CustomGuardError(p)));
