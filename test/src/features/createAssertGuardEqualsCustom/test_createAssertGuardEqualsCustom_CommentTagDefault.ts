import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertGuardEqualsCustom_CommentTagDefault =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.createAssertGuardEquals<CommentTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
