import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_CommentTagDefault =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.assertGuardEquals<CommentTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
