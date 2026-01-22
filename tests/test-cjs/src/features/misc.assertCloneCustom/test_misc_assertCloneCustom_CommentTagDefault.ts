import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_assertCloneCustom_CommentTagDefault = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.misc.assertClone<CommentTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
