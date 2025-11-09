import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertEqualsCustom_CommentTagDefault = (): void =>
  _test_assertEquals(CustomGuardError)("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) =>
    typia.assertEquals<CommentTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
