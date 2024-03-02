import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createAssertCloneCustom_CommentTagLength =
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)(
    typia.misc.createAssertClone<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
