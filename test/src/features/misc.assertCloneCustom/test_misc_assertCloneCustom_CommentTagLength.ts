import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_assertCloneCustom_CommentTagLength = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.misc.assertClone<CommentTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
