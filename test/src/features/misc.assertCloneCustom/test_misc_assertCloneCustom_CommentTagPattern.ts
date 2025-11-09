import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_assertCloneCustom_CommentTagPattern = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.misc.assertClone<CommentTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
