import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createAssertCloneCustom_CommentTagFormat =
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.misc.createAssertClone<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );
