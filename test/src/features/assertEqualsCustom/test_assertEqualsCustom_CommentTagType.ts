import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertEqualsCustom_CommentTagType = (): void =>
  _test_assertEquals(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) =>
    typia.assertEquals<CommentTagType>(input, (p) => new CustomGuardError(p)),
  );
