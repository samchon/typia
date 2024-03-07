import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_CommentTagPattern =
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.misc.assertClone<CommentTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
