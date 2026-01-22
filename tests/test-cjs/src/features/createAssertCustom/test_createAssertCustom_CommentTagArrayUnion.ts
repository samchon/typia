import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssertCustom_CommentTagArrayUnion = (): void =>
  _test_assert(CustomGuardError)("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )(typia.createAssert<CommentTagArrayUnion>((p) => new CustomGuardError(p)));
