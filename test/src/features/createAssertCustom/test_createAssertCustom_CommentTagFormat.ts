import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertCustom_CommentTagFormat = (): void =>
  _test_assert(CustomGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createAssert<CommentTagFormat>((p) => new CustomGuardError(p)));
