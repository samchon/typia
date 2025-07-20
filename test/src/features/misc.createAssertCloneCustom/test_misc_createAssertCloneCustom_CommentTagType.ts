import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createAssertCloneCustom_CommentTagType = (): void =>
  _test_misc_assertClone(CustomGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(
    typia.misc.createAssertClone<CommentTagType>(
      (p) => new CustomGuardError(p),
    ),
  );
