import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createAssertCloneCustom_CommentTagDefault = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.misc.createAssertClone<CommentTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
