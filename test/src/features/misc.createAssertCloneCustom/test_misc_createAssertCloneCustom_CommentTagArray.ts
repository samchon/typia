import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createAssertCloneCustom_CommentTagArray =
  _test_misc_assertClone(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(
    typia.misc.createAssertClone<CommentTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
