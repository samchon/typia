import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertEqualsCustom_CommentTagRange = (): void =>
  _test_assertEquals(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.createAssertEquals<CommentTagRange>((p) => new CustomGuardError(p)));
