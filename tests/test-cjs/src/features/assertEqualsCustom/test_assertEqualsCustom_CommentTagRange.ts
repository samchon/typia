import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertEqualsCustom_CommentTagRange = (): void =>
  _test_assertEquals(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) =>
    typia.assertEquals<CommentTagRange>(input, (p) => new CustomGuardError(p)),
  );
