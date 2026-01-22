import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertGuardEqualsCustom_CommentTagDefault = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.assertGuardEquals<CommentTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
