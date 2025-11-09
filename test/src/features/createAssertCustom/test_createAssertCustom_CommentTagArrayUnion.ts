import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagArrayUnion = (): void => _test_assert(CustomGuardError)(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.createAssert<CommentTagArrayUnion>((p) => new CustomGuardError(p)));
