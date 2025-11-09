import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertCustom_CommentTagInfinite = (): void =>
  _test_assert(CustomGuardError)("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )(typia.createAssert<CommentTagInfinite>((p) => new CustomGuardError(p)));
